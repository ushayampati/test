package unh.it.student_career_info.model;


import lombok.Data;

@Data
public class StudentInfoRequestDto {

    private Integer id;

    private String firstName;

    private String lastName;

    private Integer graduationYear;

    private String major;

    private String email;

    private String phone;

    private String organizationName;

    private String role;

    private String city;

    private String state;

    private String dateHired;

    private String linkedinUrl;

    private String latitude;

    private String longitude;
}
