import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  constructor( private productService:ProductService) { }

   product:Product[];
   temProduct:Product[];
   temp:Category[];
   original:Category[];


 status:FormControl;
  ngOnInit() {
    this.status = new FormControl('');
    this.productService.getAllCategories().subscribe((category: Category[])=> {this.original=category; this.temp= this.original; });
    
    
  }
  find( f:string)
  {
   
    

  }

}
