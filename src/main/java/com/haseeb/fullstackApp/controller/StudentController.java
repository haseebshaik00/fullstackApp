package com.haseeb.fullstackApp.controller;

import com.haseeb.fullstackApp.model.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents(){
        return List.of(new Student(1,"Haseeb Rahman", "haseebshaik00@gmail.com", "Male"),
                       new Student(2,"Kunal Gyanchandani", "kunal@gmail.com", "Male"),
                       new Student(3,"Ayesha Siddiqua", "ayesha@gmail.com", "Female"));
    }
}
