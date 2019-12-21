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
import { BillingService } from 'src/app/services/billing.service';
import { RewardPoint } from 'src/app/reward-point.model';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  allProducts: Product[];
  filterProducts: Product[];
  formSubmitted: boolean = false;
  billedUser: User;
  userRewardPoints: RewardPoint;

  redeemed: boolean = false;

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
    reward: ['', {
    }],
    total: ['', {
      validators: [Validators.required, Validators.min(0)]
    }],
    points: ['', {
      validators: [Validators.required, Validators.min(0)]
    }]
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private productsService: ProductService, private offerService: OfferService, private datePipe: DatePipe, private billingService: BillingService) { }
  ngOnInit() {
    this.billDate.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.allProducts = [...products];
      this.filterProducts = [...products];
      //console.log(this.allProducts);
    })
  }

  closeDrop() {
    console.log("Close Dropdown");
    this.autoComplete = false;
  }
  loadNewForm() {
    this.formSubmitted = false;
    this.items = [];
    this.billDate.setValue(this.datePipe.transform(new Date(), 'yyyy-MM-dd'));
  }
  loadName() {
    if (this.username.value.length > 0) {
      this.userService.getUser(this.username.value).pipe(
        switchMap((user: User) => {
          if (this.redeemed === true) {
            this.total.setValue(this.total.value + (this.userRewardPoints.point - this.reward.value));
          }
          this.redeemed = false;

          this.billedUser = user;
          this.name.setValue(user.firstName + ' ' + user.lastName);
          this.wrongUsername = false;
          return this.billingService.getRewardPoints(user.userId);
        })
      ).subscribe((reward: RewardPoint) => {
        if (reward !== null) {
          this.userRewardPoints = reward;
        }
        else {
          this.userRewardPoints = { user: this.billedUser, point: 0 }
        }
        this.reward.setValue(this.userRewardPoints.point);
      }, () => {
        this.name.setValue('');
        this.reward.setValue('');
        this.wrongUsername = true;
        this.username.setErrors(() => {
          return { "error": "Wrong username" };
        });
      })

    }

  }
  loadProduct(pid) {
    if (pid !== null && pid.length > 0) {
      this.productsService.getProductById(pid).pipe(
        switchMap((product: Product) => {
          this.purchase.get('pname').setValue(product.productName);
          this.purchase.get('price').clearValidators();
          this.purchase.get('price').setValidators([
            Validators.required, Validators.min(0), Validators.max(product.rate)
          ])
          this.purchase.get('price').setValue(product.rate);
          this.purchase.get('quantity').clearValidators();
          this.purchase.get('quantity').setValidators([
            Validators.required, Validators.min(0), Validators.max(product.stockCount)
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
    const find: PurchaseItem = this.items.find((item: PurchaseItem) => {
      return item.product.productCode === this.pid.value;
    })

    if (find === undefined) {
      this.items.push({
        product: this.allProducts.find((product: Product) => {
          return product.productCode === this.pid.value;
        }),
        price: +this.price.value,
        quantity: this.quantity.value
      })
    }
    else {
      this.items.forEach((item: PurchaseItem) => {
        if (item.product.productCode === this.pid.value) {
          console.log(`${item.product.productCode} - ${item.product.stockCount} - ${item.quantity}`);
          item.quantity = ((item.quantity + this.quantity.value) <= item.product.stockCount) ? (item.quantity + this.quantity.value) : item.product.stockCount;
        }
      })
    }

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
    this.items.forEach((purchaseItem: PurchaseItem) => {
      total += purchaseItem.price * purchaseItem.quantity;
    })

    if(this.redeemed) {
      total -= (this.userRewardPoints.point - this.reward.value);
    }
    if(total < 0) {
      this.reward.setValue(this.reward.value + Math.abs(total));
      total = 0;
    }

    points = Math.floor(total / 100);

    this.total.setValue(total);
    this.points.setValue(points);
  }

  checkInvalid(): boolean {
    let invalid: boolean = false;
    if (!this.billForm.valid) {
      invalid = true;
    }
    else {
      if (this.items.length === 0) {
        invalid = true;
      }
    }

    return invalid;
  }

  loadVal(code: string) {
    this.autoComplete = false;
    this.pid.setValue(code);
    this.loadProduct(code);
  }

  autoCompleteProduct() {
    let pid: string = this.pid.value;
    if (pid.length > 0) {
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

  redeem() {
    if(!this.redeemed) {
      let total: number = +this.total.value;
      let reward: number = +this.reward.value;
      if(reward > 0) {
        if (total >= reward) {
          total -= reward;
          reward = 0;
          this.total.setValue(total);
          this.reward.setValue(reward);
        }
        else {
          reward -= total;
          total = 0;
          this.total.setValue(total);
          this.reward.setValue(reward);
        }
        this.redeemed = true;
      }
    }
    else {
      this.total.setValue(this.total.value + this.userRewardPoints.point - (+this.reward.value) );
      this.reward.setValue(this.userRewardPoints.point);
      this.redeemed = false;
    }
  }

  submit() {
    console.log(this.billForm);
    console.log(this.purchase);
    console.log(this.items);

    this.bill = {
      user: this.billedUser,
      date: this.billDate.value,
      purchaseItems: this.items,
      total: this.total.value,
      rewardPoints: this.points.value
    }
    console.log(this.bill);

    this.billingService.addBill(this.bill).pipe(
      switchMap((bill: Bill) => {
        console.log(bill);
        this.formSubmitted = true;
        return this.billingService.addRewardPoints(this.billedUser, (this.points.value - (this.userRewardPoints.point - this.reward.value)));
      })
    ).subscribe((rewardPoint: RewardPoint) => {
      this.billForm.reset();
      this.purchase.reset();
      //this.items = [];
    }, () => {
      console.log("Error submitting bill");
    })

    this.items.forEach((item: PurchaseItem) => {
      let product: Product = item.product;
      product.stockCount -= item.quantity;
      this.productsService.updateProduct(product).subscribe(() => {
        console.log(`${product.productCode} - Updated successfully`);
      }, () => {
        console.log(`${product.productCode} - Update error`);
      })
    })

    this.redeemed = false;

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

  get reward() {
    return this.billForm.get('reward');
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
