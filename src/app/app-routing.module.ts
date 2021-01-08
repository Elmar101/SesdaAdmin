import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'pages' , canActivate:[AuthGuard],loadChildren: ()=> import('./pages/pages.module').then(m =>m.PagesModule) },
  {path: 'login', loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
