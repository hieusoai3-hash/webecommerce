package web.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.ecommerce.model.SiteSettings;

public interface SiteSettingsRepository extends JpaRepository<SiteSettings, Long> {}
