package com.example.demo.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name="user")
public class user {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer userid;
    private String userName;
    private String firstName;
    private String lastName;
    private String password;
    private String confirmPassword;
    private String email;
    private String phNo;
}
