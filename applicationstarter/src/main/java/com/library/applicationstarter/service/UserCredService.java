package com.library.applicationstarter.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;


@Component
public interface UserCredService {

    UserDetails getUserByUserName(String username);

    boolean doesUsernameExists(String username);

    boolean verifyEmail(String email, int templateId);

}
