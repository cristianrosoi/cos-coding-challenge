import { Auction } from './../../shared/models/auction';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  private static readonly url = `${environment.endpoints.seller.auction}`;

  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auction> {
    const url = `${AuctionService.url}`;
    let params = new HttpParams();
    params = params.set('filter', `{"limit": 10}`);
    params = params.set('count', false);
    
    return this.http.get<Auction>(url, { params });
  }
}
