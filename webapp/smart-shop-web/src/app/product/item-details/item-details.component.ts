import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  product: Product;

  constructor(private route:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=> {
      const prodId=params['id'];
      this.productService.getProductById(prodId).subscribe((product:Product)=> {
        this.product = product
      });
    });
  }

}
