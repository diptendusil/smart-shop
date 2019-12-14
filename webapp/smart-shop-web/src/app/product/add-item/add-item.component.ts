import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Category, Product } from '../product.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  
  addProduct:FormGroup= this.formBuilder.group({
    proCode: ['', Validators.required],
    proName: ['', Validators.required],
    proBrand: ['', Validators.required],
    quantityType: ['', Validators.required],
    proRate: ['', Validators.required],
    stock: ['', Validators.required],
    proAddDate: ['', Validators.required],
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
 

  constructor(private formBuilder:FormBuilder,private route:ActivatedRoute,private productService:ProductService) { }
   
  ngOnInit() {
    this.productService.getAllCategories().subscribe(category => this.category = category);
  }



get editForm() {
  return this.addProduct.controls;
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
  return this.editForm['stock'];
}
get proAddDate() {
  return this.editForm['proAddDate'];
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
  if (this.addProduct.valid) {
    const addProduct: Product = {
      productCode: this.proCode.value,
      addDate:this.proAddDate.value,
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
    this.productService.addProduct(addProduct).subscribe(() => this.isSuccess = true, () => this.isError = true);
  }

}
}