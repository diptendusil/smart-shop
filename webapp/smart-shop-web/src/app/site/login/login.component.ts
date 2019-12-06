import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :FormGroup;



  constructor() { }

  ngOnInit() {

    this.login=new FormGroup(
      {
        'username' :new FormControl(null,[Validators.required,Validators.maxLength(20)]),
        'password': new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z 0-9]+$'),Validators.maxLength(50)])
       }
    )
    }
  isLoginValid()
  {

  }
  
   get username()
   {
      return this.login.get('username');
     

   }
   get password()
   {
     return this.login.get('password');
   }

}
