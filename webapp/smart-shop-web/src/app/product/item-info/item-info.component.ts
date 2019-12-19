import { Component, OnInit, Input } from '@angular/core';
import { Product, Offer } from '../product.model';
import { OfferService } from 'src/app/services/offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  @Input()
  product: Product;
  @Input()
  offer: Offer;
  constructor(private offerService: OfferService, private productService: ProductService) {
  }
  
  ngOnInit() {
    if (this.product) {
      this.offerService.getOfferByProductToday(this.product.productCode).subscribe(offer => this.offer = offer);
    } else if (this.offer) {
      this.productService.getProductById(this.offer.productCode).subscribe(product => this.product = product)
    }
  }

}
