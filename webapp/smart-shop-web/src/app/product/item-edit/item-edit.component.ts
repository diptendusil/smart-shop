import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
 editProduct:FormGroup= this.formBuilder.group({
   proCode:['',Validators.required],
   proName:['',Validators.required],
   proBrand:['',Validators.required],
   quantityType:['',Validators.required],
   proRate:['',Validators.required],
   Stock:['',Validators.required],
   addDate:['',Validators.required],
   proAisle:['',Validators.required],
   proShelf:['',Validators.required],
   dom:['',Validators.required],
   doe:['',Validators.required],
   proImage:['',Validators.required],
   proCategory:['',Validators.required]
})
 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
  }

}
