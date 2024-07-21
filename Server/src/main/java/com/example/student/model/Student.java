package com.example.student.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private long id;
    private String firstName;
    private String lastName;
    private int marks1;
    private int marks2;
    private int marks3;
    private int marks4;
    private int total;
}
