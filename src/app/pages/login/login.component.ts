import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, of } from 'rxjs';
import { delay, delayWhen, finalize, retry, tap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  public userName!: string;
  public password!: string ;
  public errorMessage !: string ;
  succesMeesage !: string | null;
  @ViewChild('buuton') button:ElementRef | undefined;
  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {

  }

  login(form: NgForm): void{
    if(form.valid){
     this.loginService.authenticate( this.userName, this.password)
     .pipe(
       finalize( ()=>this.succesMeesage="dmadmin sistemə daxil olursuz"),
       delay(1500),
       retry(3)
      )
     .subscribe(
       response =>{
         this.router.navigateByUrl('/pages/citizen/list')
        },
        err=>{ this.errorMessage =err.error.message; }
      )
    }
  }


}
