package com.library.applicationstarter.entitys;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "user_credentials")
@Data
public class UserCreds {

    @Id
    private String id;

    @Indexed(unique = true)
    private String username;

    private String password;

    public UserCreds(String username,String password){
        this.username = username;
        this.password = password;
    }


  
}
