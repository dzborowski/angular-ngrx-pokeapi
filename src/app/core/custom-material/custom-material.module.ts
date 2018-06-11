import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import {
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';


const material = [
  CommonModule,
  CdkTableModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: material,
  exports: material
})
export class CustomMaterialModule {}
