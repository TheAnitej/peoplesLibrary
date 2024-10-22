const apiURI = 'http://localhost:8081/';

const userContext = 'users';
const authContext = 'http://localhost:8080/api/auth';
export const Endpoints = Object.freeze({
    GET:{
        DOES_USER_EXIST:[authContext,'userExists'].join('/')
    },
       
    POST:{

    },
    DELETE:{

    },
    PUT:{

    }
})