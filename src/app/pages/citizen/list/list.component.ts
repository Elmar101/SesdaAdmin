//import { CollectionViewer } from '@angular/cdk/collections';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Citizen } from 'src/app/models/entity/citizen';
import { CitizenService } from 'src/app/services/citizen.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit ,AfterViewInit/* ,OnDestroy */{
  size: number = 10;
  page: number = 1;
  counter: boolean = true;
  sortColumn:string = "s_pin";
  sortDirection:string = "asc";
  unsub !: Subscription;
  totalCount!: number;
  userParams: any = {} //fiter
  search ='';
  ELEMENT_DATA!: Citizen[] ;

  dataSource = new MatTableDataSource<Citizen>(this.ELEMENT_DATA);
  element!: Citizen[];
  displayedColumns: string[] = ["pin","firstName","lastName","fatherName","birthDate","gender"  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private citizenService:CitizenService, private router: Router,private route: ActivatedRoute,
    private el:ElementRef
    ) {
  }
  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }

  selectValueGender(gender: string){
    console.log(gender);
  }
  filter(input: any){
    console.log(input.key)
  }
  ngOnInit(): void {

    this.getCitizens();
  }
  ngAfterViewInit(){

  }
   getCitizens(){
    this.route.paramMap.subscribe(
      params =>{
        if(params.get("size")){
          this.size = Number(params.get("size"))
        }
        this.dataSource.data = [];
        this.totalCount = 0;
        },
      error =>{}
    )
     this.unsub = this.citizenService.getAllCitizen(this.size, this.page, this.counter, this.sortColumn, this.sortDirection)
    .subscribe(
      data => {
        //console.log(data);
        this.dataSource.data = data as Citizen[];
      },
      error=>{
        console.log(error.error.message)
      }
    )
   }
  loadDetails(row: any){
    //console.log(row)
   this.router.navigate(['/pages/citizen/details',row.id])
  }
}
