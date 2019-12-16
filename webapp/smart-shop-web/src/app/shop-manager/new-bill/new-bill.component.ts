import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';
import { ProductService } from 'src/app/services/product.service';
import { Product, Offer } from 'src/app/product/product.model';
import { OfferService } from 'src/app/services/offer.service';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { PurchaseItem } from 'src/app/bill.model';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  wrongUsername: boolean = false;

  items: PurchaseItem[] = [];

  purchaseItems: FormGroup[] = [];

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
    let i: number;
    for (i = 1; i <= 5; i++) {
      this.purchaseItems.push(
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
      );
    }
  }

  loadName() {
    if (this.username.value.length > 0) {
      this.userService.getUser(this.username.value).subscribe((user: User) => {
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

  loadProduct(pid, i) {
    console.log(pid + " : " + i);
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
    }
  }

  addPurchaseItem() {
    this.purchaseItems.push(
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
    );
  }

  deletePurchaseItem(index: number) {
    this.purchaseItems.splice(index, 1);
  }

  updateTotalAndPoints() {
    let points = 0;
    let total = 0;
    this.purchaseItems.forEach((purchaseItem: FormGroup) => {
      total += purchaseItem.get('price').value * purchaseItem.get('quantity').value;
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
      this.purchaseItems.forEach((purchaseItem: FormGroup) => {
        if (!purchaseItem.valid) {
          invalid = true;
        }
      })
    }

    return invalid;
  }

  submit() {
    console.log(this.billForm);
    console.log(this.purchaseItems)
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

}
