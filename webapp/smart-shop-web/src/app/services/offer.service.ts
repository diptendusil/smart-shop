import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Offer } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private _baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
  getAllOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${this._baseUrl}/product-service/offers`);
  }

  getOfferByProduct(productCode: string): Observable<Offer> {
    return this.httpClient.get<Offer>(`${this._baseUrl}/product-service/offers/${productCode}`);
  }

  getOfferByProductToday(productCode: string): Observable<Offer> {
    return this.httpClient.get<Offer>(`${this._baseUrl}/product-service/offers/today/${productCode}`);
  }
}
