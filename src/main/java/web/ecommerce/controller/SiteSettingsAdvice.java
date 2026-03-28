package web.ecommerce.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import web.ecommerce.model.Combo;
import web.ecommerce.model.SiteSettings;
import web.ecommerce.service.ComboService;
import web.ecommerce.service.SiteSettingsService;

import java.util.List;

@ControllerAdvice
public class SiteSettingsAdvice {

    private final SiteSettingsService service;
    private final ComboService comboService;

    public SiteSettingsAdvice(SiteSettingsService service, ComboService comboService) {
        this.service = service;
        this.comboService = comboService;
    }

    @ModelAttribute("siteSettings")
    public SiteSettings siteSettings() {
        return service.getSettings();
    }

    @ModelAttribute("qCombos")
    public List<Combo> quantityCombos() {
        return comboService.getActive().stream()
                .filter(Combo::isQuantityCombo)
                .sorted(java.util.Comparator.comparingInt(Combo::getBuyQuantity))
                .collect(java.util.stream.Collectors.toList());
    }
}
