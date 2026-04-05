package web.ecommerce.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import web.ecommerce.model.Combo;
import web.ecommerce.repository.ComboRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ComboService {

    private final ComboRepository repo;

    public ComboService(ComboRepository repo) {
        this.repo = repo;
    }

    @Cacheable(value = "combos", key = "'all'")
    public List<Combo> getAll() {
        return repo.findAllByOrderBySortOrderAscIdAsc();
    }

    @Cacheable(value = "combos", key = "'active'")
    public List<Combo> getActive() {
        return repo.findByActiveTrueOrderBySortOrderAscIdAsc();
    }

    public Optional<Combo> getById(Long id) {
        return repo.findById(id);
    }

    @CacheEvict(value = "combos", allEntries = true)
    public Combo save(Combo combo) {
        return repo.save(combo);
    }

    @CacheEvict(value = "combos", allEntries = true)
    public void delete(Long id) {
        repo.deleteById(id);
    }
}
