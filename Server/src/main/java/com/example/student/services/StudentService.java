package com.example.student.services;

import com.example.student.model.Student;

import java.util.List;

public interface StudentService {
    Student createStudent(Student student);

    List<Student> getAllStudents();

    boolean deleteStudent(Long id);

    Student getStudentById(Long id);

    Student updateStudent(Long id, Student student);

}
