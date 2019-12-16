import { Component, OnInit, Input } from '@angular/core';
import { Bill } from 'src/app/bill.model';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  
  @Input() bill:Bill;
  constructor() { }

  ngOnInit() {
    
  }

}
