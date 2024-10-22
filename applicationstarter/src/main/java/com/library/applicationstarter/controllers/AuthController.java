package com.library.applicationstarter.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.applicationstarter.dtos.JwtResponseDTO;
import com.library.applicationstarter.dtos.LoginRequestDTO;
import com.library.applicationstarter.entitys.UserCreds;
import com.library.applicationstarter.repository.UserCredsRepo;
import com.library.applicationstarter.service.UserCredService;
import com.library.applicationstarter.service.impl.UserCredServiceImpl;
import com.library.applicationstarter.utils.JwtUtil;



@RestController
@RequestMapping("/auth")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtils;

    @Autowired
    private UserCredServiceImpl credService;

    @Autowired
    private UserCredsRepo userCredsRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserCredService userCredsService;



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequestDTO loginRequest) {
        logger.info("in authenticateUser method");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        return ResponseEntity.ok(new JwtResponseDTO(jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody LoginRequestDTO registerRequest) {
        logger.info("in registerUser method");
        // Check if user already exists
        if (credService.loadUserByUsername(registerRequest.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        // Create new user
        UserCreds user = new UserCreds(registerRequest.getUsername(), passwordEncoder.encode(registerRequest.getPassword()));
        userCredsRepo.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }

    @GetMapping("/userExists")
    public ResponseEntity<Boolean> doesUsernameExists( String username) {
        logger.info("in doesUsernameExists method");
        return ResponseEntity.ok(credService.doesUsernameExists(username));
        
    }

    @GetMapping("/verifyEmail")
    public boolean postMethodName( String email) {
        logger.info("in doesUsernameExists method");
    return userCredsService.verifyEmail(email,1);
    }

    
}
