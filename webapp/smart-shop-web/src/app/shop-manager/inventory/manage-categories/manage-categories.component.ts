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
  addCategoryForm: FormGroup;
  categories: Category[];
  updatedItem:Category;
  id:number;

  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.addCategoryForm = new FormGroup(
      {
        'categoryName': new FormControl(null, [Validators.required, Validators.maxLength(20)])
      }
    )
    this.productService.getAllCategories().subscribe(categories=>this.categories=categories)
    this.route.params.subscribe((params:Params)=>{
      const categoryId=params['id']
      this.productService.getCategoryById(categoryId).subscribe((category:Category)=>{
        if(category)
        {
          this.id=category.categoryId
          this.addCategoryForm.patchValue({
            categoryName:category.categoryName
          })
        }
      })
    })
  }

  onDelete(categoryId:number){
    this.productService.deleteCategoryById(categoryId).subscribe();
  }

  onUpdate(){
    this.updatedItem={
      categoryId:this.id,
      categoryName:this.addCategoryForm.value.categoryName
    }
    this.productService.updateCategory(this.updatedItem).subscribe();
  }

  onAdd(){

  }
  get categoryName() {
    return this.addCategoryForm.get('categoryName');
  }

}
