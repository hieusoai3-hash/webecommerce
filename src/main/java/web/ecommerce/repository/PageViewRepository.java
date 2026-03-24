package web.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import web.ecommerce.model.PageView;

import java.time.LocalDateTime;
import java.util.List;

public interface PageViewRepository extends JpaRepository<PageView, Long> {

    long countByViewedAtBetween(LocalDateTime from, LocalDateTime to);

    @Query("SELECT pv.productId, COUNT(pv) FROM PageView pv " +
           "WHERE pv.productId IS NOT NULL AND pv.viewedAt >= :from " +
           "GROUP BY pv.productId ORDER BY COUNT(pv) DESC")
    List<Object[]> findTopProductViewsFrom(@Param("from") LocalDateTime from);
}
