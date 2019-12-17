import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/bill.model';
import { BillingService } from 'src/app/services/billing.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/site/user';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  bills:Bill[];
  loggedInUser: User=null;
  constructor(private billService:BillingService, private authService:AuthService) { }

  ngOnInit() {
    this.authService.loggedInUser.subscribe(user => this.loggedInUser = user);
    this.billService.getBillsByUser(this.loggedInUser.userId).subscribe(billList => this.bills=billList)
  }

}
