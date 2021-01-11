import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Citizen } from 'src/app/models/entity/citizen';
import { DetailsService } from 'src/app/services/details.service';
import { CitizenService } from 'src/app/services/citizen.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnDestroy {
  element !: Citizen[];
  details : any =[];
  unsubscribe !: Subscription;
  get pin():any{
    return  this.details["pin"] ? this.details["pin"] : null;
  }
  get firstName(){
    return this.details["firstName"] ? this.details["firstName"] : null;
  }

  get lastName(){
    return this.details["lastName"] ? this.details["lastName"] : null;
  }
  get fatherName(){
    return this.details["fatherName"] ? this.details["fatherName"] : null;
  }
  get gender(){
    return this.details["gender"]== 1 ? "Kişi" : "Qadin";
  }
 get  birthDay(){
    return   this.details["birthday"] ? this.details["birthday"]:null;
  }

  get country(){
    return this.details["country"] ? this.details["country"]["value"]  :  this.details["country"] == null ;
  }

  get city(){
    return this.details["city"] ? this.details["city"]["value"]:  this.details["city"] == null;
  }
  get phone(){
    return this.details["phone"] ? this.details["phone"] : this.details["phone"]== null;
  }
  constructor( private detailsService: DetailsService, private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params
    .pipe(tap( params =>{
      let id = params.id;
      this.detailsService.id = id;
    }))
    .subscribe( data => {
      //console.log(data);
      this.getDetails();
    })
  }
  getDetails(){
    this. unsubscribe = this.detailsService.getDetailsService()
    .subscribe( data => {
      //console.log(data)
      Object.keys(data).map(key=>({
      type: key,value:data[key]
    }));

    this.details = data;
      //console.log("details",this.details);
    } )
  }
}

/*/
this.details= Object.keys(data).map(key=>({
        type: key,value:data[key]
      }));

/*/
