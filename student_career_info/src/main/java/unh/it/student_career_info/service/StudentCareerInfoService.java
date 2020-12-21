package unh.it.student_career_info.service;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Component;
import unh.it.student_career_info.entity.StudentCareerInfoEntity;
import unh.it.student_career_info.model.StudentInfoRequestDto;
import unh.it.student_career_info.repo.StudentCareerInfoRepository;

import java.text.SimpleDateFormat;
import java.util.List;

@Component
@RequiredArgsConstructor
public class StudentCareerInfoService {

    private final StudentCareerInfoRepository studentCareerInfoRepository;

    public void persistStudentInfo(StudentInfoRequestDto studentInfoRequestDto) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        StudentCareerInfoEntity studentCareerInfoEntity = StudentCareerInfoEntity.builder()
                .id(studentInfoRequestDto.getId())
                .firstName(studentInfoRequestDto.getFirstName())
                .lastName(studentInfoRequestDto.getLastName())
                .graduationYear(studentInfoRequestDto.getGraduationYear())
                .city(studentInfoRequestDto.getCity())
                .dateHired(studentInfoRequestDto.getDateHired())
                .state(studentInfoRequestDto.getState())
                .email(studentInfoRequestDto.getEmail())
                .role(studentInfoRequestDto.getRole())
                .phone(studentInfoRequestDto.getPhone())
                .linkedinUrl(studentInfoRequestDto.getLinkedinUrl())
                .organizationName(studentInfoRequestDto.getOrganizationName())
                .major(studentInfoRequestDto.getMajor())
                .latitude(studentInfoRequestDto.getLatitude())
                .longitude(studentInfoRequestDto.getLongitude())
                .build();

        studentCareerInfoRepository.save(studentCareerInfoEntity);
    }

    public List<StudentCareerInfoEntity> getStudentCareerInfoEntitiesByMajor(String major) {
        return studentCareerInfoRepository.getStudentCareerInfoEntitiesByMajor(major);
    }

    public List<StudentCareerInfoEntity> getListOfStudents() {
        return studentCareerInfoRepository.findAll();
    }

    public StudentCareerInfoEntity getStudentById(Integer studentId) {
        return studentCareerInfoRepository.findOne(studentId);
    }

    public void deleteStudentById(Integer studentId) {
        StudentCareerInfoEntity studentCareerInfoEntity = studentCareerInfoRepository.findOne(studentId);
        studentCareerInfoRepository.delete(studentCareerInfoEntity);
    }

    public void updateStudentInfo(Integer studentId, StudentInfoRequestDto studentInfoRequestDto) {
        StudentCareerInfoEntity studentCareerInfoEntity = studentCareerInfoRepository.findOne(studentId);

        StudentCareerInfoEntity updatedStudentCareerInfoEntity = StudentCareerInfoEntity.builder()
                .id(studentCareerInfoEntity.getId())
                .firstName(StringUtils.isNotBlank(studentInfoRequestDto.getFirstName()) ? studentInfoRequestDto.getFirstName() : studentCareerInfoEntity.getFirstName())
                .lastName(StringUtils.isNotBlank(studentInfoRequestDto.getLastName()) ? studentInfoRequestDto.getLastName() : studentCareerInfoEntity.getLastName())
                .graduationYear(studentInfoRequestDto.getGraduationYear() != null ? studentInfoRequestDto.getGraduationYear() : studentCareerInfoEntity.getGraduationYear())
                .city(StringUtils.isNotBlank(studentInfoRequestDto.getCity()) ? studentInfoRequestDto.getCity() : studentCareerInfoEntity.getCity())
                .state(StringUtils.isNotBlank(studentInfoRequestDto.getState()) ? studentInfoRequestDto.getState() : studentCareerInfoEntity.getState())
                .email(StringUtils.isNotBlank(studentInfoRequestDto.getEmail()) ? studentInfoRequestDto.getEmail() : studentCareerInfoEntity.getEmail())
                .role(StringUtils.isNotBlank(studentInfoRequestDto.getRole()) ? studentInfoRequestDto.getRole() : studentCareerInfoEntity.getRole())
                .phone(StringUtils.isNotBlank(studentInfoRequestDto.getPhone()) ? studentInfoRequestDto.getPhone() : studentCareerInfoEntity.getPhone())
                .linkedinUrl(StringUtils.isNotBlank(studentInfoRequestDto.getLinkedinUrl()) ? studentInfoRequestDto.getLinkedinUrl() : studentCareerInfoEntity.getLinkedinUrl())
                .organizationName(StringUtils.isNotBlank(studentInfoRequestDto.getOrganizationName()) ? studentInfoRequestDto.getOrganizationName() : studentCareerInfoEntity.getOrganizationName())
                .dateHired(StringUtils.isNotBlank(studentInfoRequestDto.getDateHired()) ? studentInfoRequestDto.getDateHired() : studentCareerInfoEntity.getDateHired())
                .major(StringUtils.isNotBlank(studentInfoRequestDto.getMajor()) ? studentInfoRequestDto.getMajor() : studentCareerInfoEntity.getMajor())
                .latitude(StringUtils.isNotBlank(studentInfoRequestDto.getLatitude()) ? studentInfoRequestDto.getLatitude() : studentCareerInfoEntity.getLatitude())
                .longitude(StringUtils.isNotBlank(studentInfoRequestDto.getLongitude()) ? studentInfoRequestDto.getLongitude() : studentCareerInfoEntity.getLongitude())
                .build();

        studentCareerInfoRepository.save(updatedStudentCareerInfoEntity);
    }

}
