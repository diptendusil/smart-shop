import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
import { Offer } from 'src/app/product/product.model';
import { BillingService } from 'src/app/services/billing.service';
import { Bill } from 'src/app/bill.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-manager-dashboard',
  templateUrl: './shop-manager-dashboard.component.html',
  styleUrls: ['./shop-manager-dashboard.component.css']
})
export class ShopManagerDashboardComponent implements OnInit {
  offers: Offer[]
  totalAmt: number = 0;
  totalItems: number = 0;
  totalProducts: number = 0;
  totalCategories: number = 0;
  constructor(private offerService: OfferService, private billingService: BillingService, private productService: ProductService) { }

  ngOnInit() {
    this.offerService.getAllOffers().subscribe(offers => this.offers=offers);
    this.billingService.getBillsToday().subscribe((bill: Bill[]) => {
      //console.log(bill);
      bill.forEach((bill: Bill) => {
        this.totalAmt += bill.total;
        bill.purchaseItems.forEach((purchaseItem) => {
          this.totalItems += (purchaseItem.quantity * 1);
        })
      })
    })
    this.productService.getAllProducts().subscribe(products => this.totalProducts = products.length);
    this.productService.getAllCategories().subscribe(categories => this.totalCategories = categories.length)
  }

}
