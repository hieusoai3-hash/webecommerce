package web.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.ecommerce.model.Combo;
import java.util.List;

public interface ComboRepository extends JpaRepository<Combo, Long> {
    List<Combo> findByActiveTrueOrderBySortOrderAscIdAsc();
    List<Combo> findAllByOrderBySortOrderAscIdAsc();
}
