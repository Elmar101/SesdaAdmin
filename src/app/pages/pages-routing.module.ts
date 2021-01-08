import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitizenModule } from './citizen/citizen.module';
import { PagesComponent } from './pages.component';


 const routes: Routes = [
  {path:'',component:PagesComponent,children:[
    {path: '',redirectTo:'citizen',pathMatch:'full'},
    {path:'citizen',loadChildren:()=>import('./citizen/citizen.module').then(m=>m.CitizenModule)}
  ]},

];


@NgModule({
  imports: [
    CitizenModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
