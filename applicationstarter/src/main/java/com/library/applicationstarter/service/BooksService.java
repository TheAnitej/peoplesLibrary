package com.library.applicationstarter.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.library.applicationstarter.entitys.Books;

@Component
public interface BooksService {

    public List<Books> getAllBooks();

}
