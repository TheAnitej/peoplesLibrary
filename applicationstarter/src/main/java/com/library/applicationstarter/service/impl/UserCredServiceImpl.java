package com.library.applicationstarter.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.library.applicationstarter.dtos.UserDetailsImpl;
import com.library.applicationstarter.entitys.UserCreds;
import com.library.applicationstarter.repository.UserCredsRepo;
import com.library.applicationstarter.service.EmailService;
import com.library.applicationstarter.service.UserCredService;


@Service
public class UserCredServiceImpl implements UserDetailsService,UserCredService{

    @Autowired
    @Lazy
    private UserCredsRepo userRepository;

    @Autowired
    private EmailService emailService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserCreds> user = userRepository.findByUsername(username);

        if(!user.isPresent()){
            return null;
        }

        return new UserDetailsImpl(user.get());
    }

    @Override
    public UserDetails getUserByUserName(String username) {
        Optional<UserCreds> user = userRepository.findByUsername(username);

        if(!user.isPresent()){
            return null;
        }

        return new UserDetailsImpl(user.get());
    }

    @Override
    public boolean doesUsernameExists(String username) {
        if (loadUserByUsername(username) != null) {
            return true;
        }
        return false;
    }

    @Override
    public boolean verifyEmail(String email, int templateId){

        try {
            emailService.triggerMail(email, templateId);
            return doesUsernameExists(email);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
  
    
}