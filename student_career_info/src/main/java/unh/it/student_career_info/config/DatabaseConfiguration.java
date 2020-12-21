package unh.it.student_career_info.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;


@Configuration
@EnableTransactionManagement
@ComponentScan({"unh.it.student_career_info"})
public class DatabaseConfiguration {

    //Variable that hold the dialect information
    @Value("${spring.datasource.icdb.hibernate.dialect}")
    private String icDialect;

    //Variable that hold the default Schema information
    @Value("${spring.datasource.icdb.hibernate.defaultSchema}")
    private String defaultSchema;

    //Variable that hold the useJdbc Metadata Defaults information
    @Value("${spring.datasource.icdb.hibernate.useJdbcMetadataDefaults}")
    private String useJdbcMetadataDefaults;

    //Variable that hold the ic Show Sql information
    @Value("${spring.datasource.icdb.hibernate.showSql}")
    private String icShowSql;

    @Value("${spring.datasource.icdb.hibernate.entityPackagesToScan}")
    private String[] icEntityPackagesToScan;

    @Bean(name = "icDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.icdb")
    @Primary
    public DataSource userInfoDataSource() {
        return DataSourceBuilder.create().build();
    }

    /**
     * @param dataSource
     * @return
     */
    @Bean(name = "icJdbcTemplate")
    public JdbcTemplate icJdbcTemplate(@Qualifier("icDataSource") DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    /**
     * APi to get the Local Container Entity Manager Factory Bean
     *
     * @param builder
     * @param userInfoDataSource
     * @return
     */
    @Bean(name = "icEntityManagerFactory")
    @Primary
    public LocalContainerEntityManagerFactoryBean userInfoEntityManagerFactory(
            EntityManagerFactoryBuilder builder,
            @Qualifier("icDataSource") DataSource userInfoDataSource) {
        Map<String, String> properties = new HashMap<>();
        properties.put("hibernate.dialect", icDialect);
        properties.put("hibernate.default_schema", defaultSchema);
        properties.put("hibernate.temp.use_jdbc_metadata_defaults", useJdbcMetadataDefaults);
        properties.put("hibernate.show_sql", icShowSql);
        return builder.dataSource(userInfoDataSource)
                .packages(icEntityPackagesToScan)
                .properties(properties)
                .persistenceUnit("icEntityManager")
                .build();
    }

    /**
     * PAI to get the Platform Transaction Manager
     *
     * @param userInfoEntityManagerFactory
     * @return
     */
    @Bean(name = "icTransactionManager")
    @Primary
    public PlatformTransactionManager userInfoTransactionManager(
            @Qualifier("icEntityManagerFactory") EntityManagerFactory userInfoEntityManagerFactory) {
        return new JpaTransactionManager(userInfoEntityManagerFactory);
    }

    /**
     * API to enable the Ic Repository
     */
    @EnableJpaRepositories(entityManagerFactoryRef = "icEntityManagerFactory",
            transactionManagerRef = "icTransactionManager",
            basePackages = {"unh.it.student_career_info.repo"})
    public static class enableMessageRepo {
    }

}
