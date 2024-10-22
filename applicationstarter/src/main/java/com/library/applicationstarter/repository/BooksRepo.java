package com.library.applicationstarter.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.library.applicationstarter.entitys.Books;

public interface BooksRepo extends MongoRepository<Books,String> {

}
