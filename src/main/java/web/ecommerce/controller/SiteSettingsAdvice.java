package web.ecommerce.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import web.ecommerce.model.SiteSettings;
import web.ecommerce.service.SiteSettingsService;

@ControllerAdvice
public class SiteSettingsAdvice {

    private final SiteSettingsService service;

    public SiteSettingsAdvice(SiteSettingsService service) {
        this.service = service;
    }

    @ModelAttribute("siteSettings")
    public SiteSettings siteSettings() {
        return service.getSettings();
    }
}
