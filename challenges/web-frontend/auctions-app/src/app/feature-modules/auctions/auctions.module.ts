import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './pages/auctions.component';
import { AuctionCardComponent } from './components/auction-card/auction-card.component';


@NgModule({
  declarations: [
    AuctionsComponent,
    AuctionCardComponent
  ],
  imports: [
    CommonModule,
    AuctionsRoutingModule,
    SharedModule
  ]
})
export class AuctionsModule { }
