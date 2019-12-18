import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product, Category } from '../product.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editProduct: FormGroup = this.formBuilder.group({
    proCode: ['', Validators.required],
    proName: ['', Validators.required],
    proBrand: ['', Validators.required],
    quantityType: ['', Validators.required],
    proRate: ['', Validators.required],
    Stock: ['', Validators.required],
    addDate: ['', Validators.required],
    proAisle: ['', Validators.required],
    proShelf: ['', Validators.required],
    dom: ['', Validators.required],
    doe: ['', Validators.required],
    proImage: ['', Validators.required],
    proCategory: ['', Validators.required]
  })
  category: Category[];
  isSuccess = false;
  isError = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllCategories().subscribe(category => this.category = category);
    this.route.params.subscribe((params: Params) => {
      const prodId = params['id'];
      this.productService.getProductById(prodId).subscribe((product: Product) => {
        // product.dateOfLaunch=new Date(product.dateOfLaunch);
        // dateOfLaunch:product.dateOfLaunch.toISOString().slice(0,10),
        product.dateOfManufacture = new Date(product.dateOfManufacture);
        product.dateOfExpiry = new Date(product.dateOfExpiry);
        if (product) {
          this.editProduct.patchValue({
            proCode: product.productCode,
            proName: product.productName,
            proBrand: product.brand,
            quantityType: product.quantityType,
            proRate: product.rate,
            Stock: product.stockCount,
            addDate: product.addDate, 
            proAisle: product.aisle,
            proShelf: product.shelf,
            dom: product.dateOfManufacture.toISOString().slice(0, 10),
            doe: product.dateOfExpiry.toISOString().slice(0, 10),
            proImage: product.image,
            proCategory: product.category
          });

        }
      });
    });
  }
  get editForm() {
    return this.editProduct.controls;
  }
  get proCode() {
    return this.editForm['proCode'];
  }
  get proName() {
    return this.editForm['proName'];
  }
  get proBrand() {
    return this.editForm['proBrand'];
  }
  get quantityType() {
    return this.editForm['quantityType'];
  }
  get proRate() {
    return this.editForm['proRate'];

  }
  get stock() {
    return this.editForm['Stock'];
  }
  get addDate() {
    return this.editForm['addDate'];
  }
  get proAisle() {
    return this.editForm['proAisle'];
  }
  get proShelf() {
    return this.editForm['proShelf'];
  }
  get dom() {
    return this.editForm['dom'];
  }
  get doe() {
    return this.editForm['doe'];
  }
  get proImage() {
    return this.editForm['proImage'];
  }
  get proCategory() {
    return this.editForm['proCategory'];
  }
  onSubmit() {
    if (this.editProduct.valid) {
      const updatedProduct: Product = {
        productCode: this.proCode.value,
        addDate: new Date(),
        aisle: this.proAisle.value,
        brand: this.proBrand.value,
        category: this.proCategory.value,
        dateOfExpiry: this.doe.value,
        dateOfManufacture: this.dom.value,
        image: this.proImage.value,
        productName: this.proName.value,
        quantityType: this.quantityType.value,
        rate: this.proRate.value,
        shelf: this.proShelf.value,
        stockCount: this.stock.value
      }
      this.productService.updateProduct(updatedProduct).subscribe(() => this.isSuccess = true, () => this.isError = true);
    }

  }


}

