import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//import {MatTableDataSource} from '@angular/material/table';
//import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
//import { MatSortModule } from '@angular/material/sort';
const MaterialComponents = [
  FlexLayoutModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatProgressBarModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule
 // MatTableDataSource
 // MatPaginatorModule,
 // MatPaginator,
 // MatSortModule
];
@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports:[ MaterialComponents ]
})
export class AngMaterialModule { }
