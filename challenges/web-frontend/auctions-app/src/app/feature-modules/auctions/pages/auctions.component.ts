import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../auth/login/services/auth.service';
import { AuctionService } from './../../../core/services/auction.service';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit {

  constructor(private auctionService: AuctionService, private authService: AuthService) { }

  ngOnInit(): void {
    this.auctionService.getAuctions()
      .subscribe((data) => console.log(data));
  }

}
