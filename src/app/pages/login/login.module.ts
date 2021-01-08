import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from 'src/app/ang-material/ang-material.module';

const routes:Routes = [
  {path: '', component:LoginComponent,pathMatch: 'full',data:{key:"login",title:"login"}}
]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngMaterialModule
  ]
})
export class LoginModule { }
