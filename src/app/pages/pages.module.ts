import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './citizen/list/list.component';
import { DetailsComponent } from './citizen/details/details.component';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guard/auth.guard';
//import { FilterPipe } from '../libs/pipes/filter.pipe';

@NgModule({
  declarations: [LoginComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngMaterialModule
    //FilterPipe
  ],
  providers:[ AuthGuard ]
})
export class PagesModule { }
