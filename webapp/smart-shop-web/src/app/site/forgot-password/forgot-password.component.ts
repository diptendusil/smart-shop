import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../user';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  
  isAns=false;
  isValid = true;
  username= new FormControl('', Validators.required);
  secretQuestion = [];
  user: User;
  reset:FormGroup=this.formBuilder.group(
    {
      answer1:['',Validators.required],
      answer2:['',Validators.required],
      answer3:['',Validators.required]
    }
  )
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router) { }
  ngOnInit() {
    



  }

  findUser() {
    this.userService.getUserSecretQuestions(this.username.value).subscribe((res: HttpResponse<any>) => {
      this.secretQuestion = [res.body.secretQuestion1, res.body.secretQuestion2, res.body.secretQuestion3];
      this.isValid = true;
    }, (res: HttpErrorResponse) => {
      if(res.status === 404) {
        this.isValid = false;
      }
    });
  }

   get formControls()
   {
     return this.reset.controls;
   }
   get answer1()
   {
     return this.formControls['answer1'];
   }
   get answer2()
   {
     return this.formControls['answer2'];
   }
   get answer3()
   {
     return this.formControls['answer3'];

   }
   getAnswer()
   {
     if(this.reset.valid)
     {
       const ans:any=
       {
        userId:this.username.value,
        secretAnswer1:this.answer1.value,
        secretAnswer2:this.answer2.value,
	      secretAnswer3:this.answer3.value


       }

       this.userService.verifyUserSecretAnswer(ans).subscribe(val => {
         if(val){
           this.router.navigate(['resetPassword',this.username.value]);
         }
         else{
           this.isAns=true;
         }
       })
      
      
      
     }
   }
   

  
 
}
