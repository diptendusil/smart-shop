import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Offer } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private _baseUrl = `${environment.baseUrl}/product-service/offers`;
  constructor(private httpClient: HttpClient) { }
  getAllOffers(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${this._baseUrl}`);
  }
  getAllOffersAdmin(): Observable<Offer[]> {
    return this.httpClient.get<Offer[]>(`${this._baseUrl}/all`);
  }
  getOfferByProduct(productCode: string): Observable<Offer> {
    return this.httpClient.get<Offer>(`${this._baseUrl}/${productCode}`);
  }

  getOfferByProductToday(productCode: string): Observable<Offer> {
    return this.httpClient.get<Offer>(`${this._baseUrl}/today/${productCode}`);
  }
  addOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.post<Offer>(`${this._baseUrl}`, offer);
  }
  modifyOffer(offer: Offer): Observable<Offer> {
    return this.httpClient.put<Offer>(`${this._baseUrl}`, offer);
  }
  deleteOffer(offer: Offer) {
    return this.httpClient.delete(`${this._baseUrl}/${offer.offerId}`);
  }
}
