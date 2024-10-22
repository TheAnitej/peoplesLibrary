import { Injectable } from '@angular/core';
import { RestService } from '../../shared/rest/rest.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Endpoints } from '../../shared/variables/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private _rest : HttpClient) { }


  public doesUserExist(emailId: any):Observable<any>{
    let params = new HttpParams().set('username', emailId);

    return this._rest.get(Endpoints.GET.DOES_USER_EXIST,{ params: params });
  }
}
