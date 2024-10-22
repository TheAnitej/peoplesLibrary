package com.library.applicationstarter.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.library.applicationstarter.entitys.Books;
import com.library.applicationstarter.repository.BooksRepo;
import com.library.applicationstarter.service.BooksService;

@Service
public class BooksServiceImpl implements BooksService{

    @Autowired
    private BooksRepo booksRepo;

    @Override
    public List<Books> getAllBooks() {
        return booksRepo.findAll();
    }

}
