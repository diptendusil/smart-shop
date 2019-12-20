import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ItemInfoComponent } from 'src/app/product/item-info/item-info.component';
import { Category, Offer, Product } from 'src/app/product/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { OfferService } from 'src/app/services/offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  categories: Category[];
  offers: Offer[];
  allProducts: Product[];
  suggestions: Product[];
  constructor(private productService: ProductService, private offerService: OfferService, private authService: AuthService) { }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(categories => this.categories = categories);
    this.offerService.getAllOffers().subscribe(offers => this.offers = offers);
    this.productService.getAllProductsInStock().subscribe(products => this.allProducts = products.slice(0,6));
    if(this.authService.loggedInUser.value) {
      this.authService.loggedInUser.pipe(switchMap(user => this.productService.getSuggestions(user.userId))).subscribe((suggestions) => {
        this.suggestions = suggestions;
        console.log(suggestions);
      });
    }
  }
}
