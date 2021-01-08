import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from 'src/app/ang-material/ang-material.module';

const routes:Routes =[
  {path:'',component: DetailsComponent,pathMatch: 'full'}
]
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngMaterialModule
  ]
})
export class DetailsModule { }
