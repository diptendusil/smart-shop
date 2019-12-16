import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';
import { ProductService } from 'src/app/services/product.service';
import { Product, Offer } from 'src/app/product/product.model';
import { OfferService } from 'src/app/services/offer.service';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { PurchaseItem, Bill } from 'src/app/bill.model';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  allProducts: Product[];
  filterProducts: Product[];

  billedUser: User;
  wrongUsername: boolean = false;
  bill: Bill;
  items: PurchaseItem[] = [];
  
  autoComplete: boolean = false;

  purchaseItems: FormGroup[] = [];
  
  purchase: FormGroup = new FormGroup({
    pid: new FormControl('', [
      Validators.required
    ]),
    pname: new FormControl('', [
      Validators.required
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
  });


  billForm: FormGroup = this.formBuilder.group({
    username: ['', {
      validators: [Validators.required]
    }],
    name: ['', {
    }],
    billDate: ['', {
      validators: [Validators.required]
    }],
    total: ['', {
      validators: [Validators.required, Validators.min(0)]
    }],
    points: ['', {
      validators: [Validators.required, Validators.min(0)]
    }]
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService, private productsService: ProductService, private offerService: OfferService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.billDate.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.allProducts = [...products];
      this.filterProducts = [...products];
      //console.log(this.allProducts);
    })
  }

  loadName() {
    if (this.username.value.length > 0) {
      this.userService.getUser(this.username.value).subscribe((user: User) => {
        this.billedUser = user;
        this.name.setValue(user.firstName + ' ' + user.lastName);
        this.wrongUsername = false;
      }, () => {
        this.name.setValue('');
        this.wrongUsername = true;
        this.username.setErrors(() => {
          return { "error": "Wrong username" };
        });
      })
    }
  }

  loadProduct(pid) {
    /* console.log(pid + " : " + i);
    if (pid.length > 0) {
      this.productsService.getProductById(pid).pipe(
        switchMap((product: Product) => {
          this.purchaseItems[i].get('pname').setValue(product.productName);
          this.purchaseItems[i].get('price').setValidators([
            this.purchaseItems[i].get('price').validator,
            Validators.max(product.rate)
          ])
          this.purchaseItems[i].get('price').setValue(product.rate);
          this.purchaseItems[i].get('quantity').setValidators([
            this.purchaseItems[i].get('quantity').validator,
            Validators.max(product.stockCount)
          ])
          return this.offerService.getOfferByProductToday(product.productCode)
        })
      )
        .subscribe((offer: Offer) => {
          console.log(offer)
          if (offer !== null) {
            console.log(offer.discountRate);
            this.purchaseItems[i].get('price').setValidators([
              this.purchaseItems[i].get('price').validator,
              Validators.max(offer.discountRate)
            ])
            this.purchaseItems[i].get('price').setValue(offer.discountRate);
          }
        }, () => {
          this.purchaseItems[i].get('pname').setValue('');
          this.purchaseItems[i].get('pid').setErrors(() => {
            return { "error": "Wrong Product Code" };
          })
        })
    } */
    console.log(pid);
    this.autoComplete = false;
    if (pid !== null && pid.length > 0) {
      this.productsService.getProductById(pid).pipe(
        switchMap((product: Product) => {
          this.purchase.get('pname').setValue(product.productName);
          this.purchase.get('price').setValidators([
            this.purchase.get('price').validator,
            Validators.max(product.rate)
          ])
          this.purchase.get('price').setValue(product.rate);
          this.purchase.get('quantity').setValidators([
            this.purchase.get('quantity').validator,
            Validators.max(product.stockCount)
          ])
          return this.offerService.getOfferByProductToday(product.productCode)
        })
      )
        .subscribe((offer: Offer) => {
          console.log(offer)
          if (offer !== null) {
            console.log(offer.discountRate);
            this.purchase.get('price').setValidators([
              this.purchase.get('price').validator,
              Validators.max(offer.discountRate)
            ])
            this.purchase.get('price').setValue(offer.discountRate);
          }
        }, () => {
          this.purchase.get('pname').setValue('');
          this.purchase.get('pid').setErrors(() => {
            return { "error": "Wrong Product Code" };
          })
        })
    }

  }

  addPurchaseItem() {
    /* this.purchaseItems.push(
      new FormGroup({
        pid: new FormControl('', [
          Validators.required
        ]),
        pname: new FormControl('', [
          Validators.required
        ]),
        quantity: new FormControl('', [
          Validators.required,
          Validators.min(0)
        ]),
        price: new FormControl('', [
          Validators.required,
          Validators.min(0)
        ]),
      })
    ); */
      this.items.push({
        product: this.allProducts.find((product:Product) => {
          return product.productCode === this.pid.value;
        }),
        price: +this.price.value,
        quantity: this.quantity.value
      })
      this.updateTotalAndPoints();
      this.purchase.reset();
  }

  deletePurchaseItem(index: number) {
    console.log(index);
    this.items.splice(index, 1);
    this.updateTotalAndPoints();
  }

  updateTotalAndPoints() {
    let points = 0;
    let total = 0;
    /* this.purchaseItems.forEach((purchaseItem: FormGroup) => {
      total += purchaseItem.get('price').value * purchaseItem.get('quantity').value;
    }) */
    this.items.forEach((purchaseItem: PurchaseItem) => {
      total += purchaseItem.price * purchaseItem.quantity;
    })
    points = Math.floor(total / 100);

    this.total.setValue(total);
    this.points.setValue(points);
  }

  checkInvalid(): boolean {
    //console.log("Hello from the other side");
    let invalid: boolean = false;
    if (!this.billForm.valid) {
      invalid = true;
    }
    else {
      /* this.purchaseItems.forEach((purchaseItem: FormGroup) => {
        if (!purchaseItem.valid) {
          invalid = true;
        }
      }) */

      if(!this.purchase.valid) {
        if(this.purchase.touched) {
          invalid = true;
        }
      }

      if(this.items.length === 0) {
        invalid = true;
      }
    }

    return invalid;
  }

  loadVal(code: string) {
    this.autoComplete = false;
    console.log("Hello : " + code);
    this.pid.setValue(code);
    this.loadProduct(code);
  }

  autoCompleteProduct() {
    let pid: string = this.pid.value;
    if(pid.length > 0) {
      const tmp = this.filterProducts.filter((product: Product) => {
        return (product.productCode + " " + product.productName).toLowerCase().includes(pid.toLowerCase());
      })
      this.allProducts = [...tmp];
      this.autoComplete = true;
    }
    else {
      this.allProducts = [...this.filterProducts];
    }
  }

  submit() {
    console.log(this.billForm);
    console.log(this.purchase);
    console.log(this.items);

    this.bill = {
      user: this.billedUser,
      dateOfPurchase: this.billDate.value,
      purchaseItems: this.items,
      total: this.total.value,
      rewardPoints: this.points.value
    }

    console.log(this.bill);
  }

  get username() {
    return this.billForm.get('username');
  }

  get name() {
    return this.billForm.get('name');
  }

  get total() {
    return this.billForm.get('total');
  }

  get points() {
    return this.billForm.get('points');
  }

  get billDate() {
    return this.billForm.get('billDate');
  }
  // purchase item form group
  get pid() {
    return this.purchase.get('pid');
  }

  get pname() {
    return this.purchase.get('pname');
  }

  get quantity() {
    return this.purchase.get('quantity');
  }

  get price() {
    return this.purchase.get('price');
  }

}
