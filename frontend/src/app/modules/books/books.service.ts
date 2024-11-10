import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Endpoints } from '../../shared/variables/endpoints';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _rest: HttpClient) { }

  addBook(book:FormData): Observable<any> {

      return this._rest.post(Endpoints.POST.ADD_NEW_BOOK, book);
  }
  
  getAvailableBooks(pincode:any,author:any,title:any,selectedGeneres:any): Observable<any> {
    let params = new HttpParams().set('pincode',pincode).append('author',author).append('title',title).append('genres',selectedGeneres);
    console.log('params',params)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    };
    return this._rest.get(Endpoints.GET.GET_BOOKS,options);
}
  
}
