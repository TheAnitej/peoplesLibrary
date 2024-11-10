const apiURI = 'http://localhost:8080/api';

const authContext = apiURI+'/auth';
const booksContext = apiURI+'/books';
const messageContext = apiURI+'/messages';
export const Endpoints = Object.freeze({
    GET:{
        DOES_USER_EXIST:[authContext,'userExists'].join('/'),
        VERIFY_EMAIL:[authContext,'verifyEmail'].join('/'),
        GET_BOOKS:[booksContext,'getAvailableBooks'].join('/')                
    },
       
    POST:{
        UPDATE_PASSWORD:[authContext,'updatePassword'].join('/'),
        SIGN_UP_USER:[authContext,'addNewUser'].join('/'),
        ADD_NEW_BOOK:[booksContext,'addBook'].join('/'),
        SEND_MSG:[messageContext,'send'].join('/'),
    },
    DELETE:{

    },
    PUT:{

    }
})