import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { DetailsComponent } from './citizen/details/details.component';
import { ListComponent } from './citizen/list/list.component';
import { LoginComponent } from './login/login.component';

 const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'pages/citizen/list', component:ListComponent,canActivate:[AuthGuard]},
  {path: 'pages/citizen/details/:id', component:DetailsComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo:'login' , pathMatch: 'full'}
];

/* const routes: Routes = [
  {path: '', component:LoginComponent,
   children: [
     {
       path: '',
       children: [
        {path: 'login', component:LoginComponent},
        {path: 'citizen/list', component:ListComponent,canActivate:[AuthGuard]},
        {path: 'citizen/details', component:DetailsComponent,canActivate:[AuthGuard]},
        {path: '**', redirectTo:'login' , pathMatch: 'full'}
       ]
     }
   ]

  }

];*/
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
