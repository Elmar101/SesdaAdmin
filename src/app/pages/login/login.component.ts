import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  public errorMessage: string | undefined;
  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    if(form.valid){
     this.loginService.authenticate( this.userName, this.password)
     .subscribe( response =>{
       if(response){
         //console.log(response)
         this.router.navigateByUrl('/pages/citizen/list')
       }else
       this.errorMessage = "sehf istifadeci adi ve ya passwordu"
     })
    }else {
      this.errorMessage = "adinizi ve passwordunuzu doldurun";
    }
  }

}
