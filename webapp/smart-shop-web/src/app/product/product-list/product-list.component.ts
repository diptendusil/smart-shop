import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Category, Product, Offer } from '../product.model';
import { ProductService } from 'src/app/services/product.service';
import { OfferService } from 'src/app/services/offer.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: Category;
  displayString: string;
  productList: Product[];
  offerList: Offer[];
  constructor(private router: Router, private productService: ProductService, private offerService: OfferService, private authService: AuthService, private route: ActivatedRoute) {
    this.category = this.router.getCurrentNavigation().extras.state['category'];
    if (!this.category) {
      this.displayString = this.router.getCurrentNavigation().extras.state['display'];
      if (this.displayString === 'Recommendations') {
        this.productService.getSuggestions(this.authService.loggedInUser.value.userId).subscribe(products => this.productList = products);
      } else if (this.displayString === 'Deals of the Day') {
        this.offerService.getAllOffers().subscribe(offers => {
          this.offerList = offers
        });


      } else if (this.displayString === 'Search Results') {
        this.router.events.subscribe((evt) => {
          if (evt instanceof NavigationEnd) {
            this.router.navigated = false;
          }
          const text = this.router.getCurrentNavigation().extras.state['text'];
          this.productService.getSearch(text).subscribe(products => this.productList = products);
        })
      } else if (this.displayString === 'All Products') {
        this.productService.getAllProductsInStock().subscribe(products => this.productList = products);
      }
    }
    else {
      this.displayString = this.category.categoryName;
      this.productService.getAllProductsByCategory(this.category.categoryId).subscribe(products => this.productList = products);
    }
  }

  ngOnInit() {


  }

}
