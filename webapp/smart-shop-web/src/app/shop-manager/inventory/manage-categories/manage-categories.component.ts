import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/product/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  categories: Category[];
  categoryControls: FormControl[] = [];
  newCategoryControl: FormControl = new FormControl('', Validators.required);
  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.productService.getAllCategories().subscribe(categories=> {
      this.categories=categories;
      this.categories.forEach(category => {
        this.categoryControls.push(new FormControl(category.categoryName, Validators.required));
      });
    })

  }

  onDelete(categoryId:number){
    this.productService.deleteCategoryById(categoryId).subscribe();
  }

  onUpdate(updatedCategory: Category){
    const index = this.categories.findIndex(category => category===updatedCategory);
    updatedCategory.categoryName = this.categoryControls[index].value;
    console.log(updatedCategory);
    
    this.productService.updateCategory(updatedCategory).subscribe();
  }

  onAdd(){

  }
}
