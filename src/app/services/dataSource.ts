/* import { CollectionViewer, DataSource } from "@angular/cdk/collections"
import { BehaviorSubject, Observable } from "rxjs";
import { Citizen } from "../models/entity/citizen";
import { DateType } from "../theme/utils/date";
import { CitizenService } from "./citizen.service";

export class DataSourceh implements DataSource<Citizen> {
  private dSubject = new  BehaviorSubject <Citizen[]>([]);
  constructor(private citizenService:CitizenService){

  }
  loadDataSource(
    firstName?: string,
    lastName?: string,
    fatherName?: string,
    birthDate?: DateType,
    gender?: number,
    pin?: string,
  ){
    this.citizenService.getAllCitizen()
    .subscribe( data = > this.dSubject.next(data) )
  }
  connect(collectionViewer: CollectionViewer): Observable<Citizen[]> {
    return this.dSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.");
  }



} */

