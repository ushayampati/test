package unh.it.student_career_info.entity;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "student_career_info")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentCareerInfoEntity {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "graduation_year")
    private Integer graduationYear;

    @Column(name = "major")
    private String major;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "organization_name")
    private String organizationName;

    @Column(name = "role")
    private String role;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "linkedin_url")
    private String linkedinUrl;

    @Column(name = "date_hired")
    private String dateHired;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "longitude")
    private String longitude;

}
