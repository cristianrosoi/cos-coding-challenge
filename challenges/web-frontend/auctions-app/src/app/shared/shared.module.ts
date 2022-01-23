import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelTypePipe } from './pipes/fuel-type.pipe';
import { TransmissionTypePipe } from './pipes/transmission-type.pipe';



@NgModule({
  declarations: [
    FuelTypePipe,
    TransmissionTypePipe
  ],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    ThemeModule,
    FuelTypePipe,
    TransmissionTypePipe
  ]
})
export class SharedModule { }
