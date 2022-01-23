import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuctionService } from './../../../core/services/auction.service';
import { Auction } from './../../../shared/models/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent {

  auction$: Observable<Auction>;

  constructor(private auctionService: AuctionService) {
    this.auction$ = this.auctionService.getAuctions();
  }

}
