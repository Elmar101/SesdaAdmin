import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { ListComponent } from './list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../../../ang-material/ang-material.module';
const routes:Routes = [
 {path:'',component:ListComponent,pathMatch: 'full'}
]

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngMaterialModule
  ]
})
export class ListModule { }
