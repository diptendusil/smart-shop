import { Component, OnInit, Input } from '@angular/core';
import { Category, Product } from '../product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {
  @Input()
  category: Category;
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProductsByCategory(this.category.categoryId).subscribe(products=> this.products = products.slice(0,5));
  }

}
