package com.haseeb.fullstackApp.model;

public class Student {

    private final int studentId;
    private final String name;
    private final String email;
    private final String gender;

    public Student(int studentId, String name, String email, String gender) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    public int getStudentId() {
        return studentId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getGender() {
        return gender;
    }
}
