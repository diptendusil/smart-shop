import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  constructor(private productService: ProductService,private formBuilder:FormBuilder) { }

  allProduct: Product[];
  filteredProduct: Product[];
  temp: Category[];
  original: Category[];


  categoryControl: FormControl = new FormControl('');

  categoryControls: FormControl[];
  ngOnInit() {
    this.productService.getAllCategories().subscribe((category: Category[]) => { 
      this.original = category; this.temp = this.original; 
      
    });
    this.productService.getAllProducts().subscribe((products: Product[]) => { this.allProduct = products; this.filteredProduct = this.allProduct; })
    this.categoryControl.valueChanges.subscribe((value) => {
      this.filterByCategory(value);
    })

  }
  filterByCategory(category: string) {
    if(category) {
      this.filteredProduct = this.allProduct.filter((product: Product) => product.category.categoryId === +category);
      console.log(this.filteredProduct);
      
    } else {
      this.filteredProduct = this.allProduct;
    }
  }

}
