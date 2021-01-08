import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Citizen } from '../models/entity/citizen';
import { CitizenPg } from '../models/entity/citizen-pg';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  urlApi= " http://172.16.208.15:8888/api/admin/citizens";
  constructor( private http:HttpClient ) { }

  getAllCitizen(size: number,page: number,counter:boolean,sortColumn:string,sortDirection: string){
    let params = new HttpParams()
    .set("size",`${size}`)
    .set("page",`${page}`)
    .set("counter",`${counter}`)
    .set("sortColumn",sortColumn)
    .set("sortDirection",sortDirection)
    return this.http.get<CitizenPg[]>(this.urlApi,{responseType:"json",params:params})
  }



 /*  getAllCitizen() {

    let params = new HttpParams()
    .set("size","10" )
    .set("page","1")
    .set("counter","true")
    .set("sortColumn","s_pin")
    .set("sortDirection","asc")
    return this.http.get<any>(this.urlApi + "/citizens",{responseType:"json",params:params});
  } */
}
