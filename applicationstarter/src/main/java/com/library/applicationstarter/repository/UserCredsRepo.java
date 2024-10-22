package com.library.applicationstarter.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.library.applicationstarter.entitys.UserCreds;
import java.util.Optional;


@Repository
public interface UserCredsRepo extends MongoRepository<UserCreds,String> {

    Optional<UserCreds> findByUsername(String username);

}
