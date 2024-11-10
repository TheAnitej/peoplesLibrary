package com.library.applicationstarter.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.library.applicationstarter.dtos.BooksDTO;
import com.library.applicationstarter.entitys.Books;
import com.library.applicationstarter.entitys.Users;
import com.library.applicationstarter.repository.BooksRepo;
import com.library.applicationstarter.repository.UsersRepo;
import com.library.applicationstarter.service.BooksService;
import com.library.applicationstarter.service.SecurityContext;

@Service
public class BooksServiceImpl implements BooksService {

    private static final Logger logger = LoggerFactory.getLogger(BooksServiceImpl.class);

    @Autowired
    private BooksRepo booksRepo;

    @Autowired
    private SecurityContext securityContext;

    @Autowired
    private UsersRepo usersRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
public List<BooksDTO> getAllBooks(String pincode, String author, String title, List<String> genres) {

        Query query = new Query();

        query.addCriteria(new Criteria().orOperator(
                        Criteria.where("title").regex(".*" + Pattern.quote(title.toLowerCase()) + ".*", "i"),
                        Criteria.where("author").regex(".*" + Pattern.quote(author.toLowerCase()) + ".*", "i"),
                        Criteria.where("genres").in(genres),
                        Criteria.where("pincode").is(pincode))
        );

        List<Books> books =  mongoTemplate.find(query, Books.class);



        List<BooksDTO> bookDtos = new ArrayList<>();

        for(int i=0;i<books.size();i++){
            BooksDTO bean = new BooksDTO();
            BeanUtils.copyProperties(books.get(i), bean);
            bookDtos.add(bean);
        }

        for(BooksDTO book: bookDtos){
            Optional<Users> user =  usersRepo.findByUsername(book.getUploadedBy());
            if(user.isPresent()){
                book.setUploadedBy(user.get().getFirstName()+" "+user.get().getMiddleName()+" "+user.get().getLastName());
            }
        }

        return bookDtos;

    }

    @Override
    public void addNewBook(BooksDTO bookDetails) {
        logger.info("in addNewBook method..");
        try {
            Books book = new Books();
            logger.info("before getting loggedin username...");
            book.setUploadedBy(securityContext.getLoggedInUsername());
            logger.info("after getting loggedin username...");

            BeanUtils.copyProperties(bookDetails, book);

            logger.info("saving book details to db...");
            booksRepo.save(book);
        } catch (Exception e) {
            e.printStackTrace();
            throw new Error("Error while adding new book", e);
        }

    }

}
