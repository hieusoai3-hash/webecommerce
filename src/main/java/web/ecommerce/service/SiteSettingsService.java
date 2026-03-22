package web.ecommerce.service;

import org.springframework.stereotype.Service;
import web.ecommerce.model.SiteSettings;
import web.ecommerce.repository.SiteSettingsRepository;

@Service
public class SiteSettingsService {

    private final SiteSettingsRepository repo;

    public SiteSettingsService(SiteSettingsRepository repo) {
        this.repo = repo;
    }

    public SiteSettings getSettings() {
        return repo.findById(1L).orElseGet(() -> repo.save(new SiteSettings()));
    }

    public void save(SiteSettings settings) {
        settings.setId(1L);
        repo.save(settings);
    }
}
