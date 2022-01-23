import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuctionService } from './../../../core/services/auction.service';
import { AuctionCardComponent } from './../components/auction-card/auction-card.component';
import { AuctionsComponent } from './auctions.component';


describe('AuctionsComponent', () => {
  let component: AuctionsComponent;
  let fixture: ComponentFixture<AuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionsComponent, AuctionCardComponent ],
      providers: [
        {
          provide: AuctionService,
          useValue: jasmine.createSpyObj('AuctionService', ['getAuctions'])
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
