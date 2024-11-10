package com.library.applicationstarter.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.library.applicationstarter.entitys.Books;

public interface BooksRepo extends MongoRepository<Books,ObjectId> {

    @Query("{ 'pincode' : ?0}")
    List<Books> findByFilters(String pincode);

}
