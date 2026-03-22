
# Trên máy kia - Load image:
#   docker load < webecommerce.tar.gz
#
#  Trên máy kia - Chạy container:
#   docker run -d -p 8080:8080 --name webecommerce webecommerce:latest
#
# Truy cập: http://localhost:8080
# =============================================

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/*.jar app.jar
COPY data/ data/
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]