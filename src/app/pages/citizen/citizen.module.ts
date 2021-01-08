import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitizenComponent } from './citizen.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from 'src/app/ang-material/ang-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '', component: CitizenComponent, children: [
      {path:'',redirectTo:'list',pathMatch:'full'},
      {path:'list',loadChildren:()=>import('./list/list.module').then(m=>m.ListModule)},
      {path:'details',loadChildren:()=>import('./details/details.module').then(m=>m.DetailsModule)},
      {path: 'details/:id',loadChildren:()=>import('./details/details.component').then(m=>m.DetailsComponent)}
    ]
  }
];
@NgModule({
  declarations: [CitizenComponent],
  imports: [
    CommonModule,
    AngMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CitizenModule { }
