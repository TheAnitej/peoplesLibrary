package com.library.applicationstarter.entitys;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "books")
@Data
public class Books {

    @Id
    private String id;  // MongoDB document ID
    private String authorName;
    private String bookName;
    private double rating;
    private String genre;
    private List<Review> reviews;

}
