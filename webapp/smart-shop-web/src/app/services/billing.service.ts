import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../bill.model';
import { User } from '../site/user';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private _baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  addBill(bill: Bill) {

  }

  getAllBills() {

  }

  getBillsByUser(user: User) {
    
  }
}
