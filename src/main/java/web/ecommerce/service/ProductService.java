package web.ecommerce.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import web.ecommerce.model.Product;
import web.ecommerce.repository.ProductRepository;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    @Transactional(readOnly = true)
    public List<Product> getAll() {
        return repo.findAll();
    }

    @Transactional(readOnly = true)
    public List<Product> getByCategory(String category) {
        return repo.findByCategory(category);
    }

    @Transactional(readOnly = true)
    public List<Product> getOnSale() {
        return repo.findByDiscountGreaterThan(0);
    }

    @Transactional(readOnly = true)
    public Optional<Product> getById(String id) {
        return repo.findById(id);
    }

    @Transactional(readOnly = true)
    public List<Product> search(String q) {
        if (q == null || q.isBlank()) return repo.findAll();
        return repo.searchByKeyword(q.trim());
    }

    public Product save(Product product) {
        return repo.save(product);
    }

    public void delete(String id) {
        repo.deleteById(id);
    }

    public void updateSale(String productId, int discountPct) {
        repo.findById(productId).ifPresent(p -> {
            if (discountPct > 0) {
                long base = p.getOriginalPrice() > 0 ? p.getOriginalPrice() : p.getPrice();
                p.setOriginalPrice(base);
                p.setPrice(base * (100 - discountPct) / 100);
                p.setDiscount(discountPct);
            } else {
                if (p.getOriginalPrice() > 0) p.setPrice(p.getOriginalPrice());
                p.setOriginalPrice(0);
                p.setDiscount(0);
            }
            repo.save(p);
        });
    }

    public String saveImage(MultipartFile file, String uploadDir) throws IOException {
        if (file == null || file.isEmpty()) return null;
        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path dir = Paths.get(uploadDir, "images", "products", "uploads");
        Files.createDirectories(dir);
        Files.copy(file.getInputStream(), dir.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        return "images/products/uploads/" + filename;
    }
}
