import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor( private loginService:LoginService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url === "http://172.16.208.15:8888/api/admin/login"){
      return next.handle(request);
    }else{
      request = request.clone({
        setHeaders:{Authorization :`${sessionStorage.getItem("token")}`}
        //headers: request.headers.set("Authorization", `${token}`)
      })
      //console.log(request)
      return next.handle(request);
    }
  }
}

