import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  userId:string;
  isSuccess=false;
  isError=false;

  constructor( private formBuillder:FormBuilder, private userService:UserService, private routes:ActivatedRoute) { }

  resetPass:FormGroup=this.formBuillder.group({
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
  })

  get formControl()
  {
    return this.resetPass.controls;
  }
  get password()
  {
    return this.formControl['password'];
  }


  ngOnInit() {
    this.routes.params.subscribe((params:Params)=>
    {
         this.userId=params['id'];
    })


  }
  reset()
  {
    if(this.resetPass.valid)
    {
      const pass={
        userId:this.userId,
        newPassword:this.password.value

      }
      this.userService.resetPassword(this.userId,pass).subscribe(() => this.isSuccess = true, () => this.isError = true)
    }
  }

}
