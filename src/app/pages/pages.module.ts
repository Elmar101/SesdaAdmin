import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    AngMaterialModule,
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //FilterPipe
  ],
  providers:[
     AuthGuard
   ]
})
export class PagesModule { }
