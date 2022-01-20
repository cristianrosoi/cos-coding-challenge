import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';


@NgModule({
  declarations: [
    AuctionsComponent
  ],
  imports: [
    CommonModule,
    AuctionsRoutingModule
  ]
})
export class AuctionsModule { }
