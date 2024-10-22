package com.library.applicationstarter.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.applicationstarter.entitys.Books;
import com.library.applicationstarter.service.BooksService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/books")
public class BooksController {

    @Autowired
    private BooksService booksService;

    @GetMapping("/getAllBooks")
    public List<Books> getMethodName() {
        return booksService.getAllBooks();
    }
    

}
