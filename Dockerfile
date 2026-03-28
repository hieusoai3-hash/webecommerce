# =============================================
# SETUP DOCKER (build image + tạo container, chưa chạy)
# =============================================
#
# Máy chỉ cần cài Docker Desktop — không cần JDK, Maven hay PostgreSQL.
#
# Bước 1 — Cài Docker Desktop:
#   https://www.docker.com/products/docker-desktop
#   Mở Docker Desktop, đợi icon taskbar chuyển xanh là sẵn sàng.
#
# Bước 2 — Clone repo về máy:
#   git clone <repo-url>
#   cd webecommerce
#
# Bước 3 — Build image và tạo container (chưa chạy):
#   docker compose up --no-start --build
#
#   Docker sẽ tự động:
#     - Build Spring Boot app thành image
#     - Tạo các container (nb2-app, nb2-postgres)
#     - KHÔNG tự khởi động — mở Docker Desktop rồi bấm Start thủ công
#
#   Lần đầu mất vài phút để tải và build. Từ lần sau sẽ nhanh hơn.
#
# Bước 4 — Mở Docker Desktop, vào Containers, bấm Start các container.
#   App chạy tại: http://localhost:8080
#   Admin panel:  http://localhost:8080/admin
#
# Các lệnh thường dùng:
#   docker compose up --no-start --build  → Build lại + tạo container (chưa chạy)
#   docker compose up --no-start          → Tạo container (không build lại)
#   docker compose down                   → Xóa container (giữ nguyên data)
#   docker compose logs -f                → Xem log realtime
#
# Lưu ý:
#   - Dữ liệu lưu trong Docker volume nb2-pgdata, không mất khi dừng container
#   - Nếu sửa code, chạy lại: docker compose up --no-start --build
# =============================================

# Stage 1: Build JAR
FROM eclipse-temurin:21-jdk AS builder
WORKDIR /app
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline
COPY src/ src/
RUN ./mvnw clean package -DskipTests

# Stage 2: Run
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
