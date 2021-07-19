package com.example.demo.controller;
import com.example.demo.model.user;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RegisterController {
    @Autowired
    UserService userService;
    @RequestMapping(value="/register",method=RequestMethod.POST)
    public ModelAndView register() {
        ModelAndView mav = new ModelAndView("register");
        return mav;
    }
    @RequestMapping(value="/registerProcess",method=RequestMethod.POST)
    public ModelAndView registerProcess(@ModelAttribute user u){
        userService.saveUser(u);
        return new ModelAndView("successRegister");
    }

}
