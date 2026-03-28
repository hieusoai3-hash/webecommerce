package web.ecommerce.config;

import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AbstractAuthenticationFailureEvent;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Tracks failed login attempts per IP and blocks after too many failures.
 */
@Service
public class LoginAttemptService {

    private static final int  MAX_ATTEMPTS      = 10;
    private static final long BLOCK_DURATION_MS = 15 * 60 * 1000L; // 15 minutes

    // ip -> [failureCount, blockedUntilEpochMs]
    private final ConcurrentHashMap<String, long[]> state = new ConcurrentHashMap<>();

    @EventListener
    public void onFailure(AbstractAuthenticationFailureEvent event) {
        String ip = extractIp(event);
        if (ip == null) return;
        state.compute(ip, (k, v) -> {
            long[] s = (v != null) ? v : new long[]{0L, 0L};
            s[0]++;
            if (s[0] >= MAX_ATTEMPTS) {
                s[1] = System.currentTimeMillis() + BLOCK_DURATION_MS;
            }
            return s;
        });
    }

    @EventListener
    public void onSuccess(AuthenticationSuccessEvent event) {
        String ip = extractIp(event);
        if (ip != null) state.remove(ip);
    }

    public boolean isBlocked(HttpServletRequest request) {
        String ip = getClientIp(request);
        long[] s = state.get(ip);
        if (s == null || s[1] == 0) return false;
        if (System.currentTimeMillis() > s[1]) {
            state.remove(ip);
            return false;
        }
        return true;
    }

    private String extractIp(Object event) {
        try {
            var details = ((org.springframework.security.authentication.event.AbstractAuthenticationEvent) event)
                    .getAuthentication().getDetails();
            if (details instanceof org.springframework.security.web.authentication.WebAuthenticationDetails) {
                return ((org.springframework.security.web.authentication.WebAuthenticationDetails) details).getRemoteAddress();
            }
        } catch (Exception ignored) {}
        return null;
    }

    public static String getClientIp(HttpServletRequest request) {
        String xff = request.getHeader("X-Forwarded-For");
        if (xff != null && !xff.isBlank()) return xff.split(",")[0].trim();
        return request.getRemoteAddr();
    }
}
