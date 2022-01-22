import { Auction } from './../../../shared/models/auction';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './../../../auth/login/services/auth.service';
import { AuctionService } from './../../../core/services/auction.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit {

  auction$: Observable<Auction>;

  constructor(private auctionService: AuctionService, private authService: AuthService) {
    this.auction$ = this.auctionService.getAuctions();
  }

  ngOnInit(): void {
    this.auctionService.getAuctions()
      .subscribe((data) => console.log(data));
  }

}
