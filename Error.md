web-ban-xip  | 
web-ban-xip  |   .   ____          _            __ _ _
web-ban-xip  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
web-ban-xip  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
web-ban-xip  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
web-ban-xip  |   '  |____| .__|_| |_|_| |_\__, | / / / /
web-ban-xip  |  =========|_|==============|___/=/_/_/_/
web-ban-xip  |
web-ban-xip  |  :: Spring Boot ::                (v4.0.3)
web-ban-xip  |
web-ban-xip  | 2026-03-28T17:17:38.567Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : Starting EcommerceApplication v0.0.1-SNAPSHOT using Java 21.0.10 with PID 1 (/app/app.jar started by root in /app)
web-ban-xip  | 2026-03-28T17:17:38.571Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : The following 1 profile is active: "prod"
web-ban-xip  | 2026-03-28T17:17:39.165Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
web-ban-xip  | 2026-03-28T17:17:39.212Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 40 ms. Found 6 JPA repository interfaces.
web-ban-xip  | 2026-03-28T17:17:39.619Z  INFO 1 --- [ecommerce] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
web-ban-xip  | 2026-03-28T17:17:39.629Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
web-ban-xip  | 2026-03-28T17:17:39.630Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.18]
web-ban-xip  | 2026-03-28T17:17:39.648Z  INFO 1 --- [ecommerce] [           main] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1038 ms
web-ban-xip  | 2026-03-28T17:17:39.814Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.jpa                    : HHH008540: Processing PersistenceUnitInfo [name: default]
web-ban-xip  | 2026-03-28T17:17:39.893Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000001: Hibernate ORM core version 7.2.4.Final
web-ban-xip  | 2026-03-28T17:17:40.395Z  INFO 1 --- [ecommerce] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
web-ban-xip  | 2026-03-28T17:17:40.427Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
web-ban-xip  | 2026-03-28T17:17:40.513Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@8b89b3a
web-ban-xip  | 2026-03-28T17:17:40.514Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
web-ban-xip  | 2026-03-28T17:17:40.540Z  WARN 1 --- [ecommerce] [           main] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
web-ban-xip  | 2026-03-28T17:17:40.562Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
web-ban-xip  |  Database JDBC URL [jdbc:postgresql://postgres:5432/ecommercedb]
web-ban-xip  |  Database driver: PostgreSQL JDBC Driver
web-ban-xip  |  Database dialect: PostgreSQLDialect
web-ban-xip  |  Database version: 16.13
web-ban-xip  |  Default catalog/schema: ecommercedb/public
web-ban-xip  |  Autocommit mode: undefined/unknown
web-ban-xip  |  Isolation level: READ_COMMITTED [default READ_COMMITTED]
web-ban-xip  |  JDBC fetch size: none
web-ban-xip  |  Pool: DataSourceConnectionProvider
web-ban-xip  |  Minimum pool size: undefined/unknown
web-ban-xip  |  Maximum pool size: undefined/unknown
web-ban-xip  | 2026-03-28T17:17:41.552Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
web-ban-xip  | 2026-03-28T17:17:41.581Z ERROR 1 --- [ecommerce] [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:17:41.582Z  WARN 1 --- [ecommerce] [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:17:41.582Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
web-ban-xip  | 2026-03-28T17:17:41.586Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
web-ban-xip  | 2026-03-28T17:17:41.588Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
web-ban-xip  | 2026-03-28T17:17:41.593Z  INFO 1 --- [ecommerce] [           main] .s.b.a.l.ConditionEvaluationReportLogger :
web-ban-xip  |
web-ban-xip  | Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
web-ban-xip  | 2026-03-28T17:17:41.601Z ERROR 1 --- [ecommerce] [           main] o.s.boot.SpringApplication               : Application run failed
web-ban-xip  |
web-ban-xip  | org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1817) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:977) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-web-server-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:321) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at web.ecommerce.EcommerceApplication.main(EcommerceApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
web-ban-xip  |  at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at java.base/java.lang.reflect.Method.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  | Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1864) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1813) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 20 common frames omitted
web-ban-xip  | Caused by: org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.validateTable(AbstractSchemaValidator.java:121) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.GroupedSchemaValidatorImpl.validateTables(GroupedSchemaValidatorImpl.java:42) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.performValidation(AbstractSchemaValidator.java:90) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.doValidation(AbstractSchemaValidator.java:68) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:278) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at java.base/java.util.HashMap.forEach(Unknown Source) ~[na:na]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:323) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:437) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1456) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 24 common frames omitted
web-ban-xip  |
web-ban-xip  |
web-ban-xip  |   .   ____          _            __ _ _
web-ban-xip  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
web-ban-xip  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
web-ban-xip  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
web-ban-xip  |   '  |____| .__|_| |_|_| |_\__, | / / / /
web-ban-xip  |  =========|_|==============|___/=/_/_/_/
web-ban-xip  |
web-ban-xip  |  :: Spring Boot ::                (v4.0.3)
web-ban-xip  |
web-ban-xip  | 2026-03-28T17:17:59.050Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : Starting EcommerceApplication v0.0.1-SNAPSHOT using Java 21.0.10 with PID 1 (/app/app.jar started by root in /app)
web-ban-xip  | 2026-03-28T17:17:59.054Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : The following 1 profile is active: "prod"
web-ban-xip  | 2026-03-28T17:17:59.687Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
web-ban-xip  | 2026-03-28T17:17:59.740Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 47 ms. Found 6 JPA repository interfaces.
web-ban-xip  | 2026-03-28T17:18:00.310Z  INFO 1 --- [ecommerce] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
web-ban-xip  | 2026-03-28T17:18:00.323Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
web-ban-xip  | 2026-03-28T17:18:00.323Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.18]
web-ban-xip  | 2026-03-28T17:18:00.348Z  INFO 1 --- [ecommerce] [           main] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1253 ms
web-ban-xip  | 2026-03-28T17:18:00.527Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.jpa                    : HHH008540: Processing PersistenceUnitInfo [name: default]
web-ban-xip  | 2026-03-28T17:18:00.592Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000001: Hibernate ORM core version 7.2.4.Final
web-ban-xip  | 2026-03-28T17:18:01.032Z  INFO 1 --- [ecommerce] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
web-ban-xip  | 2026-03-28T17:18:01.061Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
web-ban-xip  | 2026-03-28T17:18:01.149Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@70592729
web-ban-xip  | 2026-03-28T17:18:01.150Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
web-ban-xip  | 2026-03-28T17:18:01.194Z  WARN 1 --- [ecommerce] [           main] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
web-ban-xip  | 2026-03-28T17:18:01.218Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
web-ban-xip  |  Database JDBC URL [jdbc:postgresql://postgres:5432/ecommercedb]
web-ban-xip  |  Database driver: PostgreSQL JDBC Driver
web-ban-xip  |  Database dialect: PostgreSQLDialect
web-ban-xip  |  Database version: 16.13
web-ban-xip  |  Default catalog/schema: ecommercedb/public
web-ban-xip  |  Autocommit mode: undefined/unknown
web-ban-xip  |  Isolation level: READ_COMMITTED [default READ_COMMITTED]
web-ban-xip  |  JDBC fetch size: none
web-ban-xip  |  Pool: DataSourceConnectionProvider
web-ban-xip  |  Minimum pool size: undefined/unknown
web-ban-xip  |  Maximum pool size: undefined/unknown
web-ban-xip  | 2026-03-28T17:18:02.297Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
web-ban-xip  | 2026-03-28T17:18:02.336Z ERROR 1 --- [ecommerce] [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:18:02.337Z  WARN 1 --- [ecommerce] [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:18:02.337Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
web-ban-xip  | 2026-03-28T17:18:02.341Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
web-ban-xip  | 2026-03-28T17:18:02.344Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
web-ban-xip  | 2026-03-28T17:18:02.350Z  INFO 1 --- [ecommerce] [           main] .s.b.a.l.ConditionEvaluationReportLogger :
web-ban-xip  |
web-ban-xip  | Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
web-ban-xip  | 2026-03-28T17:18:02.362Z ERROR 1 --- [ecommerce] [           main] o.s.boot.SpringApplication               : Application run failed
web-ban-xip  |
web-ban-xip  | org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1817) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:977) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-web-server-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:321) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at web.ecommerce.EcommerceApplication.main(EcommerceApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
web-ban-xip  |  at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at java.base/java.lang.reflect.Method.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  | Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1864) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1813) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 20 common frames omitted
web-ban-xip  | Caused by: org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.validateTable(AbstractSchemaValidator.java:121) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.GroupedSchemaValidatorImpl.validateTables(GroupedSchemaValidatorImpl.java:42) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.performValidation(AbstractSchemaValidator.java:90) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.doValidation(AbstractSchemaValidator.java:68) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:278) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at java.base/java.util.HashMap.forEach(Unknown Source) ~[na:na]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:323) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:437) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1456) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 24 common frames omitted
web-ban-xip  |
web-ban-xip  |
web-ban-xip  |   .   ____          _            __ _ _
web-ban-xip  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
web-ban-xip  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
web-ban-xip  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
web-ban-xip  |   '  |____| .__|_| |_|_| |_\__, | / / / /
web-ban-xip  |  =========|_|==============|___/=/_/_/_/
web-ban-xip  |
web-ban-xip  |  :: Spring Boot ::                (v4.0.3)
web-ban-xip  |
web-ban-xip  | 2026-03-28T17:18:11.078Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : Starting EcommerceApplication v0.0.1-SNAPSHOT using Java 21.0.10 with PID 1 (/app/app.jar started by root in /app)
web-ban-xip  | 2026-03-28T17:18:11.082Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : The following 1 profile is active: "prod"
web-ban-xip  | 2026-03-28T17:18:11.733Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
web-ban-xip  | 2026-03-28T17:18:11.800Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 57 ms. Found 6 JPA repository interfaces.
web-ban-xip  | 2026-03-28T17:18:12.261Z  INFO 1 --- [ecommerce] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
web-ban-xip  | 2026-03-28T17:18:12.271Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
web-ban-xip  | 2026-03-28T17:18:12.272Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.18]
web-ban-xip  | 2026-03-28T17:18:12.293Z  INFO 1 --- [ecommerce] [           main] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1168 ms
web-ban-xip  | 2026-03-28T17:18:12.463Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.jpa                    : HHH008540: Processing PersistenceUnitInfo [name: default]
web-ban-xip  | 2026-03-28T17:18:12.534Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000001: Hibernate ORM core version 7.2.4.Final
web-ban-xip  | 2026-03-28T17:18:13.041Z  INFO 1 --- [ecommerce] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
web-ban-xip  | 2026-03-28T17:18:13.071Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
web-ban-xip  | 2026-03-28T17:18:13.168Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@70592729
web-ban-xip  | 2026-03-28T17:18:13.169Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
web-ban-xip  | 2026-03-28T17:18:13.197Z  WARN 1 --- [ecommerce] [           main] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
web-ban-xip  | 2026-03-28T17:18:13.216Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
web-ban-xip  |  Database JDBC URL [jdbc:postgresql://postgres:5432/ecommercedb]
web-ban-xip  |  Database driver: PostgreSQL JDBC Driver
web-ban-xip  |  Database dialect: PostgreSQLDialect
web-ban-xip  |  Database version: 16.13
web-ban-xip  |  Default catalog/schema: ecommercedb/public
web-ban-xip  |  Autocommit mode: undefined/unknown
web-ban-xip  |  Isolation level: READ_COMMITTED [default READ_COMMITTED]
web-ban-xip  |  JDBC fetch size: none
web-ban-xip  |  Pool: DataSourceConnectionProvider
web-ban-xip  |  Minimum pool size: undefined/unknown
web-ban-xip  |  Maximum pool size: undefined/unknown
web-ban-xip  | 2026-03-28T17:18:14.220Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
web-ban-xip  | 2026-03-28T17:18:14.247Z ERROR 1 --- [ecommerce] [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:18:14.248Z  WARN 1 --- [ecommerce] [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:18:14.248Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
web-ban-xip  | 2026-03-28T17:18:14.252Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
web-ban-xip  | 2026-03-28T17:18:14.254Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
web-ban-xip  | 2026-03-28T17:18:14.260Z  INFO 1 --- [ecommerce] [           main] .s.b.a.l.ConditionEvaluationReportLogger :
web-ban-xip  |
web-ban-xip  | Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
web-ban-xip  | 2026-03-28T17:18:14.268Z ERROR 1 --- [ecommerce] [           main] o.s.boot.SpringApplication               : Application run failed
web-ban-xip  |
web-ban-xip  | org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1817) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:977) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-web-server-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:321) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at web.ecommerce.EcommerceApplication.main(EcommerceApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
web-ban-xip  |  at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at java.base/java.lang.reflect.Method.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  | Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1864) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1813) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 20 common frames omitted
web-ban-xip  | Caused by: org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.validateTable(AbstractSchemaValidator.java:121) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.GroupedSchemaValidatorImpl.validateTables(GroupedSchemaValidatorImpl.java:42) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.performValidation(AbstractSchemaValidator.java:90) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.doValidation(AbstractSchemaValidator.java:68) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:278) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at java.base/java.util.HashMap.forEach(Unknown Source) ~[na:na]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:323) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:437) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1456) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 24 common frames omitted
web-ban-xip  |
web-ban-xip  |
web-ban-xip  |   .   ____          _            __ _ _
web-ban-xip  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
web-ban-xip  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
web-ban-xip  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
web-ban-xip  |   '  |____| .__|_| |_|_| |_\__, | / / / /
web-ban-xip  |  =========|_|==============|___/=/_/_/_/
web-ban-xip  |
web-ban-xip  |  :: Spring Boot ::                (v4.0.3)
web-ban-xip  |
web-ban-xip  | 2026-03-28T17:18:45.422Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : Starting EcommerceApplication v0.0.1-SNAPSHOT using Java 21.0.10 with PID 1 (/app/app.jar started by root in /app)
web-ban-xip  | 2026-03-28T17:18:45.426Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : The following 1 profile is active: "prod"
web-ban-xip  | 2026-03-28T17:18:46.179Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
web-ban-xip  | 2026-03-28T17:18:46.232Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 44 ms. Found 6 JPA repository interfaces.
web-ban-xip  | 2026-03-28T17:18:46.701Z  INFO 1 --- [ecommerce] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
web-ban-xip  | 2026-03-28T17:18:46.716Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
web-ban-xip  | 2026-03-28T17:18:46.716Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.18]
web-ban-xip  | 2026-03-28T17:18:46.741Z  INFO 1 --- [ecommerce] [           main] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1269 ms
web-ban-xip  | 2026-03-28T17:18:46.926Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.jpa                    : HHH008540: Processing PersistenceUnitInfo [name: default]
web-ban-xip  | 2026-03-28T17:18:47.000Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000001: Hibernate ORM core version 7.2.4.Final
web-ban-xip  | 2026-03-28T17:18:47.427Z  INFO 1 --- [ecommerce] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
web-ban-xip  | 2026-03-28T17:18:47.455Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
web-ban-xip  | 2026-03-28T17:18:47.537Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@70592729
web-ban-xip  | 2026-03-28T17:18:47.538Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
web-ban-xip  | 2026-03-28T17:18:47.561Z  WARN 1 --- [ecommerce] [           main] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
web-ban-xip  | 2026-03-28T17:18:47.579Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
web-ban-xip  |  Database JDBC URL [jdbc:postgresql://postgres:5432/ecommercedb]
web-ban-xip  |  Database driver: PostgreSQL JDBC Driver
web-ban-xip  |  Database dialect: PostgreSQLDialect
web-ban-xip  |  Database version: 16.13
web-ban-xip  |  Default catalog/schema: ecommercedb/public
web-ban-xip  |  Autocommit mode: undefined/unknown
web-ban-xip  |  Isolation level: READ_COMMITTED [default READ_COMMITTED]
web-ban-xip  |  JDBC fetch size: none
web-ban-xip  |  Pool: DataSourceConnectionProvider
web-ban-xip  |  Minimum pool size: undefined/unknown
web-ban-xip  |  Maximum pool size: undefined/unknown
web-ban-xip  | 2026-03-28T17:18:48.452Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
web-ban-xip  | 2026-03-28T17:18:48.482Z ERROR 1 --- [ecommerce] [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:18:48.482Z  WARN 1 --- [ecommerce] [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:18:48.482Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
web-ban-xip  | 2026-03-28T17:18:48.486Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
web-ban-xip  | 2026-03-28T17:18:48.488Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
web-ban-xip  | 2026-03-28T17:18:48.494Z  INFO 1 --- [ecommerce] [           main] .s.b.a.l.ConditionEvaluationReportLogger :
web-ban-xip  |
web-ban-xip  | Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
web-ban-xip  | 2026-03-28T17:18:48.502Z ERROR 1 --- [ecommerce] [           main] o.s.boot.SpringApplication               : Application run failed
web-ban-xip  |
web-ban-xip  | org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1817) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:977) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-web-server-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:321) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at web.ecommerce.EcommerceApplication.main(EcommerceApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
web-ban-xip  |  at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at java.base/java.lang.reflect.Method.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  | Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1864) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1813) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 20 common frames omitted
web-ban-xip  | Caused by: org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.validateTable(AbstractSchemaValidator.java:121) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.GroupedSchemaValidatorImpl.validateTables(GroupedSchemaValidatorImpl.java:42) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.performValidation(AbstractSchemaValidator.java:90) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.doValidation(AbstractSchemaValidator.java:68) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:278) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at java.base/java.util.HashMap.forEach(Unknown Source) ~[na:na]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:323) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:437) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1456) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 24 common frames omitted
web-ban-xip  |
web-ban-xip  |
web-ban-xip  |   .   ____          _            __ _ _
web-ban-xip  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
web-ban-xip  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
web-ban-xip  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
web-ban-xip  |   '  |____| .__|_| |_|_| |_\__, | / / / /
web-ban-xip  |  =========|_|==============|___/=/_/_/_/
web-ban-xip  |
web-ban-xip  |  :: Spring Boot ::                (v4.0.3)
web-ban-xip  |
web-ban-xip  | 2026-03-28T17:21:22.471Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : Starting EcommerceApplication v0.0.1-SNAPSHOT using Java 21.0.10 with PID 1 (/app/app.jar started by root in /app)
web-ban-xip  | 2026-03-28T17:21:22.475Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : The following 1 profile is active: "prod"
web-ban-xip  | 2026-03-28T17:21:23.073Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
web-ban-xip  | 2026-03-28T17:21:23.126Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 44 ms. Found 6 JPA repository interfaces.
web-ban-xip  | 2026-03-28T17:21:23.544Z  INFO 1 --- [ecommerce] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
web-ban-xip  | 2026-03-28T17:21:23.555Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
web-ban-xip  | 2026-03-28T17:21:23.556Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.18]
web-ban-xip  | 2026-03-28T17:21:23.573Z  INFO 1 --- [ecommerce] [           main] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1055 ms
web-ban-xip  | 2026-03-28T17:21:23.735Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.jpa                    : HHH008540: Processing PersistenceUnitInfo [name: default]
web-ban-xip  | 2026-03-28T17:21:23.800Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000001: Hibernate ORM core version 7.2.4.Final
web-ban-xip  | 2026-03-28T17:21:24.186Z  INFO 1 --- [ecommerce] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
web-ban-xip  | 2026-03-28T17:21:24.211Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
web-ban-xip  | 2026-03-28T17:21:24.299Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@8b89b3a
web-ban-xip  | 2026-03-28T17:21:24.301Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
web-ban-xip  | 2026-03-28T17:21:24.323Z  WARN 1 --- [ecommerce] [           main] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
web-ban-xip  | 2026-03-28T17:21:24.343Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
web-ban-xip  |  Database JDBC URL [jdbc:postgresql://postgres:5432/ecommercedb]
web-ban-xip  |  Database driver: PostgreSQL JDBC Driver
web-ban-xip  |  Database dialect: PostgreSQLDialect
web-ban-xip  |  Database version: 16.13
web-ban-xip  |  Default catalog/schema: ecommercedb/public
web-ban-xip  |  Autocommit mode: undefined/unknown
web-ban-xip  |  Isolation level: READ_COMMITTED [default READ_COMMITTED]
web-ban-xip  |  JDBC fetch size: none
web-ban-xip  |  Pool: DataSourceConnectionProvider
web-ban-xip  |  Minimum pool size: undefined/unknown
web-ban-xip  |  Maximum pool size: undefined/unknown
web-ban-xip  | 2026-03-28T17:21:25.223Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
web-ban-xip  | 2026-03-28T17:21:25.251Z ERROR 1 --- [ecommerce] [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:21:25.251Z  WARN 1 --- [ecommerce] [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:21:25.252Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
web-ban-xip  | 2026-03-28T17:21:25.257Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
web-ban-xip  | 2026-03-28T17:21:25.259Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
web-ban-xip  | 2026-03-28T17:21:25.266Z  INFO 1 --- [ecommerce] [           main] .s.b.a.l.ConditionEvaluationReportLogger :
web-ban-xip  |
web-ban-xip  | Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
web-ban-xip  | 2026-03-28T17:21:25.275Z ERROR 1 --- [ecommerce] [           main] o.s.boot.SpringApplication               : Application run failed
web-ban-xip  |
web-ban-xip  | org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1817) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:977) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-web-server-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:321) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at web.ecommerce.EcommerceApplication.main(EcommerceApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
web-ban-xip  |  at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at java.base/java.lang.reflect.Method.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  | Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1864) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1813) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 20 common frames omitted
web-ban-xip  | Caused by: org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.validateTable(AbstractSchemaValidator.java:121) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.GroupedSchemaValidatorImpl.validateTables(GroupedSchemaValidatorImpl.java:42) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.performValidation(AbstractSchemaValidator.java:90) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.doValidation(AbstractSchemaValidator.java:68) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:278) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at java.base/java.util.HashMap.forEach(Unknown Source) ~[na:na]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:323) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:437) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1456) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 24 common frames omitted
web-ban-xip  |
web-ban-xip  |
web-ban-xip  |   .   ____          _            __ _ _
web-ban-xip  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
web-ban-xip  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
web-ban-xip  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
web-ban-xip  |   '  |____| .__|_| |_|_| |_\__, | / / / /
web-ban-xip  |  =========|_|==============|___/=/_/_/_/
web-ban-xip  |
web-ban-xip  |  :: Spring Boot ::                (v4.0.3)
web-ban-xip  |
web-ban-xip  | 2026-03-28T17:21:37.061Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : Starting EcommerceApplication v0.0.1-SNAPSHOT using Java 21.0.10 with PID 1 (/app/app.jar started by root in /app)
web-ban-xip  | 2026-03-28T17:21:37.065Z  INFO 1 --- [ecommerce] [           main] web.ecommerce.EcommerceApplication       : The following 1 profile is active: "prod"
web-ban-xip  | 2026-03-28T17:21:37.688Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
web-ban-xip  | 2026-03-28T17:21:37.737Z  INFO 1 --- [ecommerce] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 40 ms. Found 6 JPA repository interfaces.
web-ban-xip  | 2026-03-28T17:21:38.245Z  INFO 1 --- [ecommerce] [           main] o.s.boot.tomcat.TomcatWebServer          : Tomcat initialized with port 8080 (http)
web-ban-xip  | 2026-03-28T17:21:38.260Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
web-ban-xip  | 2026-03-28T17:21:38.260Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/11.0.18]
web-ban-xip  | 2026-03-28T17:21:38.279Z  INFO 1 --- [ecommerce] [           main] b.w.c.s.WebApplicationContextInitializer : Root WebApplicationContext: initialization completed in 1168 ms
web-ban-xip  | 2026-03-28T17:21:38.447Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.jpa                    : HHH008540: Processing PersistenceUnitInfo [name: default]
web-ban-xip  | 2026-03-28T17:21:38.536Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000001: Hibernate ORM core version 7.2.4.Final
web-ban-xip  | 2026-03-28T17:21:39.016Z  INFO 1 --- [ecommerce] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer
web-ban-xip  | 2026-03-28T17:21:39.040Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
web-ban-xip  | 2026-03-28T17:21:39.115Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@8b89b3a
web-ban-xip  | 2026-03-28T17:21:39.116Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
web-ban-xip  | 2026-03-28T17:21:39.134Z  WARN 1 --- [ecommerce] [           main] org.hibernate.orm.deprecation            : HHH90000025: PostgreSQLDialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)
web-ban-xip  | 2026-03-28T17:21:39.159Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:
web-ban-xip  |  Database JDBC URL [jdbc:postgresql://postgres:5432/ecommercedb]
web-ban-xip  |  Database driver: PostgreSQL JDBC Driver
web-ban-xip  |  Database dialect: PostgreSQLDialect
web-ban-xip  |  Database version: 16.13
web-ban-xip  |  Default catalog/schema: ecommercedb/public
web-ban-xip  |  Autocommit mode: undefined/unknown
web-ban-xip  |  Isolation level: READ_COMMITTED [default READ_COMMITTED]
web-ban-xip  |  JDBC fetch size: none
web-ban-xip  |  Pool: DataSourceConnectionProvider
web-ban-xip  |  Minimum pool size: undefined/unknown
web-ban-xip  |  Maximum pool size: undefined/unknown
web-ban-xip  | 2026-03-28T17:21:40.122Z  INFO 1 --- [ecommerce] [           main] org.hibernate.orm.core                   : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)
web-ban-xip  | 2026-03-28T17:21:40.153Z ERROR 1 --- [ecommerce] [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:21:40.154Z  WARN 1 --- [ecommerce] [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  | 2026-03-28T17:21:40.154Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
web-ban-xip  | 2026-03-28T17:21:40.157Z  INFO 1 --- [ecommerce] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.
web-ban-xip  | 2026-03-28T17:21:40.160Z  INFO 1 --- [ecommerce] [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
web-ban-xip  | 2026-03-28T17:21:40.166Z  INFO 1 --- [ecommerce] [           main] .s.b.a.l.ConditionEvaluationReportLogger :
web-ban-xip  |
web-ban-xip  | Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
web-ban-xip  | 2026-03-28T17:21:40.174Z ERROR 1 --- [ecommerce] [           main] o.s.boot.SpringApplication               : Application run failed
web-ban-xip  |
web-ban-xip  | org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/hibernate/autoconfigure/HibernateJpaConfiguration.class]: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1817) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:603) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:525) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:333) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:371) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:331) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:201) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:977) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:621) ~[spring-context-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.boot.web.server.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:143) ~[spring-boot-web-server-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:756) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:445) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:321) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1365) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at org.springframework.boot.SpringApplication.run(SpringApplication.java:1354) ~[spring-boot-4.0.3.jar!/:4.0.3]
web-ban-xip  |  at web.ecommerce.EcommerceApplication.main(EcommerceApplication.java:10) ~[!/:0.0.1-SNAPSHOT]
web-ban-xip  |  at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at java.base/java.lang.reflect.Method.invoke(Unknown Source) ~[na:na]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:106) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.Launcher.launch(Launcher.java:64) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  |  at org.springframework.boot.loader.launch.JarLauncher.main(JarLauncher.java:40) ~[app.jar:0.0.1-SNAPSHOT]
web-ban-xip  | Caused by: jakarta.persistence.PersistenceException: Unable to build Hibernate SessionFactory  [persistence unit: default] ; nested exception is org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:448) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:411) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:419) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1864) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1813) ~[spring-beans-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 20 common frames omitted
web-ban-xip  | Caused by: org.hibernate.tool.schema.spi.SchemaManagementException: Schema validation: missing table [combos]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.validateTable(AbstractSchemaValidator.java:121) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.GroupedSchemaValidatorImpl.validateTables(GroupedSchemaValidatorImpl.java:42) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.performValidation(AbstractSchemaValidator.java:90) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.internal.AbstractSchemaValidator.doValidation(AbstractSchemaValidator.java:68) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:278) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$1(SchemaManagementToolCoordinator.java:101) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at java.base/java.util.HashMap.forEach(Unknown Source) ~[na:na]
web-ban-xip  |  at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:100) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryObserverForSchemaExport.sessionFactoryCreated(SessionFactoryObserverForSchemaExport.java:35) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryObserverChain.sessionFactoryCreated(SessionFactoryObserverChain.java:33) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:323) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.internal.SessionFactoryRegistry.instantiateSessionFactory(SessionFactoryRegistry.java:64) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:437) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1456) ~[hibernate-core-7.2.4.Final.jar!/:7.2.4.Final]
web-ban-xip  |  at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:93) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:443) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:436) ~[spring-orm-7.0.5.jar!/:7.0.5]
web-ban-xip  |  ... 24 common frames omitted
web-ban-xip  |