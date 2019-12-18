import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Offer } from 'src/app/product/product.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-manage-offers',
  templateUrl: './manage-offers.component.html',
  styleUrls: ['./manage-offers.component.css']
})
export class ManageOffersComponent implements OnInit {
  filterBy: FormControl = new FormControl('');
  sortBy: FormControl = new FormControl('');
  today: string = new Date().toISOString().slice(0,10);
  allOffers: Offer[];
  constructor(private offerService: OfferService) {
    this.offerService.getAllOffers().subscribe(offers => this.allOffers = offers);
  }

  ngOnInit() {
  }

}
