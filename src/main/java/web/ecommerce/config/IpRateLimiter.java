package web.ecommerce.config;

import org.springframework.stereotype.Component;

import java.util.concurrent.ConcurrentHashMap;

/**
 * Simple token-bucket rate limiter keyed by (scope + IP).
 * No external dependencies required.
 */
@Component
public class IpRateLimiter {

    private final ConcurrentHashMap<String, long[]> buckets = new ConcurrentHashMap<>();

    /**
     * @param key         unique scope key (e.g. "coupon:192.168.1.1")
     * @param capacity    max tokens (burst)
     * @param refillMs    time in ms to fully refill from 0 → capacity
     * @return true if request is allowed
     */
    public boolean tryAcquire(String key, int capacity, long refillMs) {
        long now = System.currentTimeMillis();
        long[] bucket = buckets.compute(key, (k, b) -> {
            if (b == null) return new long[]{capacity - 1, now}; // [tokens, lastRefillTime]
            long elapsed  = now - b[1];
            long refilled = (long) (elapsed * (double) capacity / refillMs);
            long tokens   = Math.min(capacity, b[0] + refilled);
            long newTime  = (refilled > 0) ? now : b[1];
            if (tokens > 0) return new long[]{tokens - 1, newTime};
            return new long[]{0, newTime}; // blocked — return 0 without consuming
        });
        return bucket[0] >= 0 && (bucket[0] > 0 || buckets.get(key)[0] >= 0);
    }

    /**
     * Returns true if the request is allowed.
     * Coupon validation: 15 requests per minute per IP.
     */
    public boolean allowCoupon(String ip) {
        return allow("coupon:" + ip, 15, 60_000L);
    }

    /**
     * Returns true if the request is allowed.
     * Order creation: 10 orders per 10 minutes per IP.
     */
    public boolean allowOrder(String ip) {
        return allow("order:" + ip, 10, 600_000L);
    }

    private boolean allow(String key, int capacity, long refillMs) {
        long now = System.currentTimeMillis();
        boolean[] allowed = {false};
        buckets.compute(key, (k, b) -> {
            if (b == null) {
                allowed[0] = true;
                return new long[]{capacity - 1, now};
            }
            long elapsed  = now - b[1];
            long refilled = (long) (elapsed * (double) capacity / refillMs);
            long tokens   = Math.min(capacity, b[0] + refilled);
            long newTime  = (refilled > 0) ? now : b[1];
            if (tokens > 0) {
                allowed[0] = true;
                return new long[]{tokens - 1, newTime};
            }
            return new long[]{0, newTime};
        });
        return allowed[0];
    }
}
