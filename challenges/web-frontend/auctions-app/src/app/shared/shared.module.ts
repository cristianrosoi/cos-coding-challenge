import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelTypePipe } from './pipes/fuel-type.pipe';



@NgModule({
  declarations: [
    FuelTypePipe
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    ThemeModule,
    FuelTypePipe
  ]
})
export class SharedModule { }
