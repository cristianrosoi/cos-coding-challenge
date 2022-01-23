import { takeUntil, switchMap } from 'rxjs/operators';
import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subject, timer } from 'rxjs';
import { AuctionService } from './../../../core/services/auction.service';
import { Auction } from './../../../shared/models/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnDestroy {

  private static readonly poolIntervalInSeconds = 20;

  auction$: Observable<Auction> | null = null;

  private unsubscribe = new Subject<void>();

  constructor(private auctionService: AuctionService) {
    this.initAuctions();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private initAuctions(): void {
    const source = timer(0, 1000 * AuctionsComponent.poolIntervalInSeconds);
    source
      .pipe(
        takeUntil(this.unsubscribe),
      )
      .subscribe(() => this.auction$ = this.auctionService.getAuctions())
  }

}
