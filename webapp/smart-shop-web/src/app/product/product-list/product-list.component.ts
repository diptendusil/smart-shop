import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  category: string
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit() {
   
    
  }

}
