import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../bill.model';
import { User } from '../site/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private _baseUrl = `${environment.baseUrl}/billing-service`;
  constructor(private httpClient: HttpClient) { }

  addBill(bill: Bill): Observable<Bill> {
    return this.httpClient.post<Bill>(`${this._baseUrl}/billing-service/bill`, bill);
  }

  getAllBills() {

  }

  getBillsByUser(username: string): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this._baseUrl}/bill/${username}`)
  }

  getBillById(billId:number):Observable<Bill>{
    return this.httpClient.get<Bill>(`${this._baseUrl}/bill/${billId}`)
  }
}
