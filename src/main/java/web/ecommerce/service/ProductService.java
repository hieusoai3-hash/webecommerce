package web.ecommerce.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
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

    @Cacheable("products")
    @Transactional(readOnly = true)
    public List<Product> getAll() {
        return repo.findAll();
    }

    @Cacheable(value = "products", key = "'category:' + #category")
    @Transactional(readOnly = true)
    public List<Product> getByCategory(String category) {
        return repo.findByCategory(category);
    }

    @Cacheable(value = "products", key = "'onSale'")
    @Transactional(readOnly = true)
    public List<Product> getOnSale() {
        return repo.findByDiscountGreaterThan(0);
    }

    @Cacheable(value = "products", key = "'hot'")
    @Transactional(readOnly = true)
    public List<Product> getHot() {
        return repo.findByHotTrue();
    }

    @Cacheable(value = "product", key = "#id")
    @Transactional(readOnly = true)
    public Optional<Product> getById(String id) {
        return repo.findById(id);
    }

    @Transactional(readOnly = true)
    public List<Product> search(String q) {
        if (q == null || q.isBlank()) return repo.findAll();
        return repo.searchByKeyword(q.trim());
    }

    @Caching(evict = {
        @CacheEvict(value = "products", allEntries = true),
        @CacheEvict(value = "product", key = "#product.id")
    })
    public Product save(Product product) {
        return repo.save(product);
    }

    @Caching(evict = {
        @CacheEvict(value = "products", allEntries = true),
        @CacheEvict(value = "product", key = "#id")
    })
    public void delete(String id) {
        repo.deleteById(id);
    }


    public String saveImage(MultipartFile file, String uploadDir) throws IOException {
        if (file == null || file.isEmpty()) return null;
        // Use UUID-only filename — never trust getOriginalFilename() to avoid path traversal
        String original = file.getOriginalFilename();
        String ext = "";
        if (original != null && original.lastIndexOf('.') >= 0) {
            String candidate = original.substring(original.lastIndexOf('.')).toLowerCase();
            if (candidate.matches("\\.[a-z0-9]{1,5}")) ext = candidate;
        }
        String filename = UUID.randomUUID().toString() + ext;
        Path dir = Paths.get(uploadDir, "images", "products", "uploads");
        Files.createDirectories(dir);
        // Resolve against dir and verify the result stays inside dir
        Path target = dir.resolve(filename).normalize();
        if (!target.startsWith(dir.normalize())) {
            throw new IOException("Invalid upload path");
        }
        Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);
        return "images/products/uploads/" + filename;
    }
}
