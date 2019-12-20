import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../bill.model';
import { User } from '../site/user';
import { Observable } from 'rxjs';
import { RewardPoint } from '../reward-point.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private _baseUrl = `${environment.baseUrl}/billing-service`;
  constructor(private httpClient: HttpClient) { }

  addBill(bill: Bill): Observable<Bill> {
    return this.httpClient.post<Bill>(`${this._baseUrl}/bill`, bill);
  }

  getAllBills(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this._baseUrl}/bill/all`);
  }

  getBillsToday(): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this._baseUrl}/bill/today`);
  }

  getBillsByUser(username: string): Observable<Bill[]> {
    return this.httpClient.get<Bill[]>(`${this._baseUrl}/bill/user/${username}`)
  }

  getBillById(billId:number):Observable<Bill>{
    return this.httpClient.get<Bill>(`${this._baseUrl}/bill/id/${billId}`)
  }


  getRewardPoints(userId: string):Observable<RewardPoint> {
    return this.httpClient.get<RewardPoint>(`${this._baseUrl}/bill/points/${userId}`)
  }

  addRewardPoints(user:User, points:number) {
    return this.httpClient.post<RewardPoint>(`${this._baseUrl}/bill/points/${points}`, user);
  }
}
