package web.ecommerce.service;

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

    public List<Combo> getAll() {
        return repo.findAllByOrderBySortOrderAscIdAsc();
    }

    public List<Combo> getActive() {
        return repo.findByActiveTrueOrderBySortOrderAscIdAsc();
    }

    public Optional<Combo> getById(Long id) {
        return repo.findById(id);
    }

    public Combo save(Combo combo) {
        return repo.save(combo);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
