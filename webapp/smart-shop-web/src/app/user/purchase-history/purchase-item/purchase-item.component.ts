import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/bill.model';
import { BillingService } from 'src/app/services/billing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  
  bill:Bill
  constructor(private billingService:BillingService, private activatedRoute:ActivatedRoute) {
    // let id=this.activatedRoute.snapshot.params['id']
    // this.billingService.getBillById(id).subscribe(data=>{
    //   this.bill=data
    // })
   }

  ngOnInit() {
    let id=this.activatedRoute.snapshot.params['id']
    this.billingService.getBillById(id).subscribe(data=>{
      this.bill=data
    })
    
    
  }

}
