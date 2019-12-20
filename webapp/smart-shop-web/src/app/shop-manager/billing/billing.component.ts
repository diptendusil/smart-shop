import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/bill.model';
import { User } from 'src/app/site/user';
import { BillingService } from 'src/app/services/billing.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  bills:Bill[];
  constructor(private billService:BillingService, private authService:AuthService) { }

  ngOnInit() {
    this.billService.getAllBills().subscribe(billList => this.bills=billList)
  }

}
