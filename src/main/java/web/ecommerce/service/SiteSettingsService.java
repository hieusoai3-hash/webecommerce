package web.ecommerce.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import web.ecommerce.model.SiteSettings;
import web.ecommerce.repository.SiteSettingsRepository;

@Service
public class SiteSettingsService {

    private final SiteSettingsRepository repo;

    public SiteSettingsService(SiteSettingsRepository repo) {
        this.repo = repo;
    }

    @Cacheable("settings")
    public SiteSettings getSettings() {
        return repo.findById(1L).orElseGet(() -> repo.save(new SiteSettings()));
    }

    @CacheEvict(value = "settings", allEntries = true)
    public void save(SiteSettings settings) {
        settings.setId(1L);
        repo.save(settings);
    }
}
