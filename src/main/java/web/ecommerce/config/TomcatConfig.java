package web.ecommerce.config;

import jakarta.servlet.MultipartConfigElement;
import org.apache.catalina.connector.Connector;
import org.springframework.boot.tomcat.servlet.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

@Configuration
public class TomcatConfig {

    /**
     * Remove Tomcat connector-level POST size limit.
     * Must run AFTER Spring Boot's built-in TomcatWebServerFactoryCustomizer
     * (order = LOWEST_PRECEDENCE - 10) which resets maxPostSize to 2 MB by default.
     * Using LOWEST_PRECEDENCE ensures our -1 (unlimited) wins.
     */
    @Bean
    @Order(Ordered.LOWEST_PRECEDENCE)
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatCustomizer() {
        return factory -> factory.addConnectorCustomizers((Connector connector) -> {
            connector.setMaxPostSize(-1);
            connector.setMaxSavePostSize(-1);
        });
    }

    /** Remove servlet-level multipart size limits (-1L = unlimited) */
    @Bean
    public MultipartConfigElement multipartConfigElement() {
        return new MultipartConfigElement("", -1L, -1L, -1);
    }
}
