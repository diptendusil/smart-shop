import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
import { Offer } from 'src/app/product/product.model';

@Component({
  selector: 'app-shop-manager-dashboard',
  templateUrl: './shop-manager-dashboard.component.html',
  styleUrls: ['./shop-manager-dashboard.component.css']
})
export class ShopManagerDashboardComponent implements OnInit {
  offers: Offer[]
  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offerService.getAllOffers().subscribe(offers => this.offers=offers);
  }

}
