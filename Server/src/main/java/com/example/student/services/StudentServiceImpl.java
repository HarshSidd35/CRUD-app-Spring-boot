package com.example.student.services;

import com.example.student.entity.StudentEntity;
import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @SuppressWarnings("null")
    @Override
    public Student createStudent(Student student) {
        StudentEntity studentEntity = new StudentEntity();

        BeanUtils.copyProperties(student, studentEntity);
        studentRepository.save(studentEntity);
        return student;
    }

    @Override
    public List<Student> getAllStudents() {
        List<StudentEntity> studentEntities = studentRepository.findAll();

        List<Student> students = studentEntities
                .stream()
                .map(stud -> new Student(
                        stud.getId(),
                        stud.getFirstName(),
                        stud.getLastName(),
                        stud.getMarks1(),
                        stud.getMarks2(),
                        stud.getMarks3(),
                        stud.getMarks4(),
                        stud.getTotal()))
                .collect(Collectors.toList());
        return students;
    }

    @SuppressWarnings("null")
    @Override
    public boolean deleteStudent(Long id) {
        StudentEntity student = studentRepository.findById(id).get();
        studentRepository.delete(student);
        return true;
    }

    @SuppressWarnings("null")
    @Override
    public Student getStudentById(Long id) {
        StudentEntity studentEntity = studentRepository.findById(id).get();
        Student student = new Student();
        BeanUtils.copyProperties(studentEntity, student);
        return student;
    }

    @SuppressWarnings("null")
    @Override
    public Student updateStudent(Long id, Student student) {
        StudentEntity studentEntity = studentRepository.findById(id).get();
        studentEntity.setFirstName(student.getFirstName());
        studentEntity.setLastName(student.getLastName());
        studentEntity.setMarks1(student.getMarks1());
        studentEntity.setMarks2(student.getMarks2());
        studentEntity.setMarks3(student.getMarks3());
        studentEntity.setMarks4(student.getMarks4());
        studentEntity.setTotal(student.getTotal());
        studentRepository.save(studentEntity);
        return student;
    }
}
