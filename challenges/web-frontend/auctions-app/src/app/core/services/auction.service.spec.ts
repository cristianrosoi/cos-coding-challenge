import { environment } from './../../../environments/environment';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuctionService } from './auction.service';

describe('AuctionService', () => {
  let service: AuctionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuctionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get auctions with default parameters [GET]', fakeAsync(() => {
    const filterMock = encodeURIComponent("{}");
    const countMock = false;
    const expectedUrl = `${environment.endpoints.seller.auction}?filter=${filterMock}&count=${countMock}`;

    service.getAuctions().subscribe();

    const testRequest = httpMock.expectOne(expectedUrl);
    flushMicrotasks();

    expect(testRequest.request.method).toBe('GET');
    expect(testRequest.request.params.get('filter')).toBe('{}');
    expect(testRequest.request.params.get('count')).toBe('false');
  }));
});
