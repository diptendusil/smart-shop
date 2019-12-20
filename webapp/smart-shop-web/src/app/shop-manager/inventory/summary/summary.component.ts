import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalProducts: number = 0;
  totalCategories: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => this.totalProducts = products.length);
    this.productService.getAllCategories().subscribe(categories => this.totalCategories = categories.length)
  }

}
