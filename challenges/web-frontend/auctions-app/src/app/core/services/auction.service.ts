import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private static readonly url = `${environment.endpoints.seller.auction}`;

  constructor(private http: HttpClient) { }

  getAuctions() {
    const url = `${AuctionService.url}`;
    let params = new HttpParams();
    params = params.set('filter', 'isLive');
    params = params.set('count', true);
    
    return this.http.get(url, { params });
  }
}
