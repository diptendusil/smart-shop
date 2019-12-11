import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  addCategoryForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addCategoryForm = new FormGroup(
      {
        'categoryName': new FormControl(null, [Validators.required, Validators.maxLength(20)])
      }
    )
  }

}
