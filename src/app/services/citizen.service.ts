import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  url= " http://172.16.208.15:8888/api/admin/";
  constructor( private http:HttpClient ) { }

  getAllCitizen() {

    let params = new HttpParams()
    .set("size","10" )
    .set("page","1")
    .set("counter","true")
    .set("sortColumn","s_pin")
    .set("sortDirection","asc")
    return this.http.get<any>(this.url + "citizens",{responseType:"json",params:params});
  }
}
