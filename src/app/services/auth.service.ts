import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "http://172.16.208.15:8888/api/admin/";
  token: string | undefined | null;
  constructor(private http: HttpClient) {}

  authentication(userName: string, password: string ):Observable<any>{
    if (!userName || !password) return of(false);
    return this.http.post<any>(this.baseUrl + 'login',{
      userName: userName,
      password: password
    },{responseType:'json'}).pipe(
      map( (user: any) => {
        const result = user;
        if(result){
          sessionStorage.setItem("token",result.token)
        }
       return sessionStorage.getItem("token");
      })
    );
  }
  authenticationGet(){
    return this.http.get(this.baseUrl + 'login');
  }
}
