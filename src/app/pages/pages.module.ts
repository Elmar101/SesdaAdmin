import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';
import { JwtInterceptor } from '../libs/interceptors/jwt.interceptor';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    AngMaterialModule,
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //FilterPipe
  ],
  providers:[
     AuthGuard,
     AuthService,
     LoginService,
     {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi: true
    }
   ]
})
export class PagesModule { }
