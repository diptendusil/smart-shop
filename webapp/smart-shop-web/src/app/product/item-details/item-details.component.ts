import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Product, Offer } from '../product.model';
import { ProductService } from 'src/app/services/product.service';
import { OfferService } from 'src/app/services/offer.service';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  product: Product;
  offer: Offer;
  constructor(private route:ActivatedRoute,private productService:ProductService, private offerService: OfferService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=> {
      const prodId=params['id'];
      this.productService.getProductById(prodId).pipe(
        tap(product => this.product = product),
        switchMap(product => this.offerService.getOfferByProductToday(product.productCode))).subscribe(offer => this.offer = offer);
      });
  }

}
