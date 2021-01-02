import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Citizen } from 'src/app/models/entity/citizen';
import { DetailsService } from 'src/app/services/details.service';
import { CitizenService } from 'src/app/services/citizen.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  element !: Citizen[];
  items : any =[];
  get pin():any{
    return  this.items["pin"] ? this.items["pin"] : null;
  }
  get firstName(){
    return this.items["firstName"] ? this.items["firstName"] : null;
  }

  get lastName(){
    return this.items["lastName"] ? this.items["lastName"] : null;
  }
  get fatherName(){
    return this.items["fatherName"] ? this.items["fatherName"] : null;
  }
  get gender(){
    if(this.items["gender"]==0 ) return "kişi" ;
    else return "Qadin";
  }
 get  birthDay(){
    if(this.items["creationDate"])
    return this.items["birthday"] ? this.items["birthday"]:null;
    else return "--"
  }

  get country(){
    return this.items["country"] ? this.items["country"]["value"]  :  this.items["country"] == null ;
  }

  get city(){
    return this.items["city"] ? this.items["city"]["value"]:  this.items["city"] == null;
  }
  get phone(){
    return this.items["phone"] ? this.items["phone"] : this.items["phone"]== null;
  }
  constructor( private detailsService: DetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
     let id = params.id;
     this.detailsService.id = id;
    })
  this.getDetails();
  }
  getDetails(){
    this.detailsService.getDetailsService()
    .subscribe( data => {
      Object.keys(data).map(key=>({
      type: key,value:data[key]
    }));

    this.items = data;
      //console.log("items",this.items);
    } )
  }
}

/*/
this.items= Object.keys(data).map(key=>({
        type: key,value:data[key]
      }));

/*/
