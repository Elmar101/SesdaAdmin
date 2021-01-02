import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  arr!: [any];
  url= " http://172.16.208.15:8888/api/admin/citizen/";// http://172.16.208.15:8888/api/admin/citizen/{id}
  constructor( private http:HttpClient ) { }
  id : any;
  getDetailsService() {
    return this.http.get<any>(this.url + this.id);
  }
}
