import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupKeyComponent } from './group-key.component';
import { GridComponent } from './grid/grid.component';
import { GroupKeyRoutingModule } from './group-key-routing.module';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    GroupKeyComponent,
    GridComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    GroupKeyRoutingModule
  ]
})
export class GroupKeyModule { }
