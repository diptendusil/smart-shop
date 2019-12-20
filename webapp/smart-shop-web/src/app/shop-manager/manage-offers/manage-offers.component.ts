import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Offer, Product } from 'src/app/product/product.model';
import { OfferService } from 'src/app/services/offer.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-offers',
  templateUrl: './manage-offers.component.html',
  styleUrls: ['./manage-offers.component.css']
})
export class ManageOffersComponent implements OnInit {
  filterBy: FormControl = new FormControl('');
  filterValue: FormControl = new FormControl('');
  sortBy: FormControl = new FormControl('offerId');
  sortOrder: FormControl = new FormControl('asc');
  today: string = new Date().toISOString().slice(0, 10);
  addForm: FormGroup;
  allProducts: Product[];
  allOffers: Offer[];
  filteredOffers: Offer[];
  selectedProduct: Product;
  constructor(private offerService: OfferService, private formBuilder: FormBuilder, private productService: ProductService) {
    this.offerService.getAllOffersAdmin().subscribe(offers => {
      this.allOffers = offers;
      this.filteredOffers = offers;
      console.log(this.allOffers);
    });
    this.productService.getAllProducts().subscribe(products => {
      console.log(products);
      
      this.allProducts = products;
      this.addForm = this.formBuilder.group({
        offerName: ['', Validators.required],
        offerDate: ['',Validators.required],
        productCode: ['', [Validators.required, this.checkProduct.bind(this)]],
        discountRate: ['', [Validators.required, this.checkPrice.bind(this)]]
      });
    });
    this.filterBy.valueChanges.subscribe(() => {
      this.filteredOffers = this.allOffers;
      this.filterValue.setValue(null);
    });
    this.filterValue.valueChanges.subscribe((value: string) => {
      if (value) {
        if (this.filterBy.value === 'productCode') {
          this.filteredOffers = this.allOffers.filter(offer => offer.productCode.toLowerCase().includes(value.toLowerCase()));
        } else if (this.filterBy.value === 'productName') {
          this.filteredOffers = this.allOffers.filter(offer => offer.productName.toLowerCase().includes(value.toLowerCase()));
        } else if (this.filterBy.value === 'discountRate') {
          this.filteredOffers = this.allOffers.filter(offer => offer.discountRate === +value);
        } else if (this.filterBy.value === 'offerName') {
          this.filteredOffers = this.allOffers.filter(offer => offer.offerName.toLowerCase().includes(value.toLowerCase()))
        }
      } else {
        this.filteredOffers = this.allOffers;
      }
    });
  }

  ngOnInit() {
    this.sortOrder.valueChanges.subscribe((value: string) => {
      this.sort(value);
    });
    this.sortBy.valueChanges.subscribe(() => {
      this.sort(this.sortOrder.value);
    });

  }
  sort(order: string) {
    this.filteredOffers = this.filteredOffers.sort(this.comparator);
    if (order === 'dsc') {
      this.filteredOffers = this.filteredOffers.reverse();
    }
  }
  compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  comparator = (a: Offer, b: Offer) => {
    const param = this.sortBy.value;
    if (param === 'product') {
      const currentProductName = a.productName;
      const nextProductName = b.productName;
      return this.compare(currentProductName, nextProductName);
    } else {
      return this.compare(a[param], b[param]);
    }
  }
  checkDate() {
    return this.filterBy.value !== 'offerDate';
  }
  get offerName() {
    return this.addForm.get('offerName');
  }
  get offerDate() {
    return this.addForm.get('offerDate');
  }
  get productCode() {
    return this.addForm.get('productCode');
  }
  get discountRate() {
    return this.addForm.get('discountRate');
  }
  checkProduct(productControl: FormControl): { [s: string]: boolean } {
    const filteredProduct = this.allProducts.find(product => product.productCode === productControl.value);
    if(!filteredProduct) {
      return {'noMatch': true}
    } else {
      this.selectedProduct = filteredProduct;
      return null;
    }
  }
  checkPrice(priceControl: FormControl): { [s: string]: boolean} {
    if (!this.selectedProduct) {
      return { 'notSelected': true};
    } else {
      if(+priceControl.value >= this.selectedProduct.rate) {
        return { 'notValid': true}
      }
    }
  }
  addOffer() {
    if(this.addForm.valid) {
      const newOffer: Offer = {
        offerName: this.offerName.value,
        offerDate: new Date(this.offerDate.value),
        discountRate: this.discountRate.value,
        productCode:  this.productCode.value
      };
      this.offerService.addOffer(newOffer).subscribe(offer => {
        this.allOffers.push(offer);
        console.log(this.filteredOffers);
        this.addForm.reset();
      })
    }
  }
  deleteOffer(offerToDelete: Offer) {
    this.offerService.deleteOffer(offerToDelete).subscribe(() => {
      const index = this.allOffers.findIndex(offer => offer.offerId === offerToDelete.offerId);
      this.allOffers.splice(index,1);
    });
  }
}
