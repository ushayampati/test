package unh.it.student_career_info;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StudentCareerInfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentCareerInfoApplication.class, args);
	}

}


/*
spring.datasource.postgres.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
		spring.datasource.postgres.hibernate.showSql=true
		spring.datasource.postgres.jdbcUrl=jdbc:postgresql://localhost:62340/postgres
		spring.datasource.postgres.username=postgres
		spring.datasource.postgres.password=admin
		spring.datasource.postgres.initialization-mode=always
		spring.datasource.postgres.hibernate.defaultSchema=unh_it

		spring.datasource.postgres.driverClassName = org.postgresql.Driver,
		spring.datasource.postgres.type = com.zaxxer.hikari.HikariDataSource,
		spring.datasource.postgres.idleTimeout= 10000,
		spring.datasource.postgres.connectionTestQuery= SELECT 1,
		spring.datasource.postgres.minimumIdle= 5,
		spring.datasource.postgres.maximumPoolSize= 40,
		spring.datasource.postgres.validationTimeout= 2000,

		spring.datasource.postgres.hibernate.useJdbcMetadataDefaults= false*/
