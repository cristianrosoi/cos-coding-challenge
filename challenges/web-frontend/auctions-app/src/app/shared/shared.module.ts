import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThemeModule
  ],
  exports: [
    ThemeModule
  ]
})
export class SharedModule { }
