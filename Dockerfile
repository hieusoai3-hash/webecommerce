# =============================================
# HƯỚNG DẪN CHẠY TRÊN MÁY KHÁC
# =============================================
#
# Máy chỉ cần cài Docker, không cần JDK hay Maven.
#
# [CÁCH 1] Build trực tiếp từ source code:
#
#   Bước 1 - Build image (Docker tự build JAR):
#     docker build -t webecommerce:latest .
#
#   Bước 2 - Chạy container:
#     docker run -d -p 8080:8080 --name webecommerce webecommerce:latest
#
# -----------------------------------------------
#
# [CÁCH 2] Dùng file .tar.gz (không cần source code):
#
#   Bước 1 - Export image ra file (trên máy đã build):
#     docker save webecommerce:latest | gzip > webecommerce.tar.gz
#
#   Bước 2 - Copy file webecommerce.tar.gz sang máy kia
#
#   Bước 3 - Load image:
#     docker load < webecommerce.tar.gz
#
#   Bước 4 - Chạy container:
#     docker run -d -p 8080:8080 --name webecommerce webecommerce:latest
#
# Truy cập: http://localhost:8080
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
COPY data/ data/
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
