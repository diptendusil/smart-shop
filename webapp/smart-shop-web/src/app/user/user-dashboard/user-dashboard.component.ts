import { Component, OnInit } from '@angular/core';
import { Category, Offer } from 'src/app/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  categories: Category[];
  offers: Offer[];
  constructor(private productService: ProductService, private offerService: OfferService) { }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(categories => this.categories = categories);
    this.offerService.getAllOffers().subscribe(offers => this.offers = offers);

  }

}
