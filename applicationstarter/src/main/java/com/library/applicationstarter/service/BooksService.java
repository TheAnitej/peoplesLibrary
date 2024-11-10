package com.library.applicationstarter.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.library.applicationstarter.dtos.BooksDTO;
import com.library.applicationstarter.entitys.Books;

@Component
public interface BooksService {

    public List<BooksDTO> getAllBooks(String pincode,String author,String title,List<String> genres );

    public void addNewBook(BooksDTO bookDetails);

}
