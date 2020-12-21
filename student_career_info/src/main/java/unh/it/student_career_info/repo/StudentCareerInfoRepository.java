package unh.it.student_career_info.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import unh.it.student_career_info.entity.StudentCareerInfoEntity;

import java.util.List;

public interface StudentCareerInfoRepository extends JpaRepository<StudentCareerInfoEntity, Integer> {
    List<StudentCareerInfoEntity> getStudentCareerInfoEntitiesByMajor(String major);

    List<StudentCareerInfoEntity> getStudentCareerInfoEntitiesByGraduationYear(Integer graduationYear);

}
