package web.ecommerce.config;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import web.ecommerce.model.PageView;
import web.ecommerce.repository.PageViewRepository;

import java.time.LocalDateTime;

@Service
public class AsyncPageViewService {

    private final PageViewRepository pageViewRepository;

    public AsyncPageViewService(PageViewRepository pageViewRepository) {
        this.pageViewRepository = pageViewRepository;
    }

    @Async
    public void record(String productId) {
        pageViewRepository.save(new PageView(LocalDateTime.now(), productId));
    }
}
