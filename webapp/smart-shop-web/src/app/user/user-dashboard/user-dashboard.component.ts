import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/product/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  categories: Category[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(categories => this.categories = categories);
  }

}
