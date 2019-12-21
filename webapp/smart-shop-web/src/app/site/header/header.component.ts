import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { dashboardUrl } from '../user-navigation-handler';
import { Product } from 'src/app/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: User = null;
  productsLoaded: boolean = false;
  allProducts: Product[];
  filteredProducts: Product[];
  autoComplete:boolean = false;

  searchHistory: {code: string, name: string}[];
  search: FormControl = new FormControl('');
  constructor(private router: Router, private authService: AuthService, private productService: ProductService) { }

  ngOnInit() {
    this.authService.loggedInUser.subscribe(user => this.loggedInUser = user);
  }

  logout() {
    this.authService.logout();
  }

  home() {
    if (this.authService.loggedInUser.value) {
      const redirectUrl = dashboardUrl(this.authService.loggedInUser.value);
      this.router.navigate(redirectUrl);
    }
    else {
      this.router.navigate(["/"]);
    }
  }

  loadProducts() {
    if(!this.productsLoaded) {
      this.productService.getAllProductsInStock().subscribe((products) => {
        console.log("Loaded");
        this.allProducts = [...products];
        this.filteredProducts = [...products];
        this.productsLoaded = true;
      }, () => {
        console.log("Could not load products");
      })
    }
  }

  loadDropDown() {
    if(this.search.value.length > 0) {
      const filter = this.allProducts.filter((product) => {
        return (product.productName + " " + product.brand).toLowerCase().includes(this.search.value.toLowerCase());
      });
      this.filteredProducts = [...filter];
      this.autoComplete = true;
    }
    else {
      this.filteredProducts = [...this.allProducts];
      this.autoComplete = false;
    }
  }

  resetSearch() {
    this.autoComplete = false;
    this.search.setValue('');
    this.filteredProducts = [...this.allProducts];
  }

  closeDrop() {
    this.autoComplete = false;
  }
}
