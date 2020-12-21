package unh.it.student_career_info.controller;

import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import unh.it.student_career_info.entity.StudentCareerInfoEntity;
import unh.it.student_career_info.model.StudentInfoRequestDto;
import unh.it.student_career_info.service.StudentCareerInfoService;

import java.util.List;


@RestController
@RequestMapping(value = "/student/careerinfo")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StudentCareerInfoController {

    private final StudentCareerInfoService studentCareerInfoService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void persistStudentInfo(@RequestBody @ApiParam(required = true) StudentInfoRequestDto request) {
        studentCareerInfoService.persistStudentInfo(request);
    }

    @GetMapping
    public List<StudentCareerInfoEntity> getListOfStudents() {
        return studentCareerInfoService.getListOfStudents();
    }

    @GetMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public StudentCareerInfoEntity getStudentById(@PathVariable("id") @ApiParam(value = "student ID", required = true) Integer id) {
        return studentCareerInfoService.getStudentById(id);
    }

    @DeleteMapping(value = "/{id}",  consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean deleteStudentById(@PathVariable("id") @ApiParam(value = "student ID", required = true) Integer id) {
        studentCareerInfoService.deleteStudentById(id);
        return true;
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateStudentInfo(@PathVariable("id") @ApiParam(value = "student ID", required = true) Integer id,
                                  @RequestBody @ApiParam(required = true) StudentInfoRequestDto request) {
        studentCareerInfoService.updateStudentInfo(id, request);
    }
}
