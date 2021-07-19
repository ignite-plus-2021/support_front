package com.example.demo.service;

import com.example.demo.model.user;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public String saveUser(user u){
        user user1=userRepository.save(u);
        return user1.getFirstName();
    }


}
