import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback, UserFeedback } from 'src/app/site/feedback.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dashboardUrl } from 'src/app/site/user-navigation-handler';
import { User } from 'src/app/site/user';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback:Feedback;
  feedbackForm:FormGroup=this.formBuilder.group({
    answer1:['',{validators:[Validators.required]}],
    answer2:['',{validators:[Validators.required]}],
    answer3:['',{validators:[Validators.required]}],
    answer4:['',{validators:[Validators.required]}],
    answer5:['',{validators:[Validators.required]}],
    answer6:['',{validators:[Validators.required]}],
    answer7:['',{validators:[Validators.required]}],
    answer8:['',{validators:[Validators.required]}],
    answer9:['',{validators:[Validators.required]}],
    answer10:['',{validators:[Validators.required]}]
  })

  constructor(private feedbackService:FeedbackService, private formBuilder:FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit() {
    let feedbackId:number=Math.floor(Math.random()*3)+1
    this.feedbackService.getFeedback(feedbackId).subscribe(data=>this.feedback=data);
  }

  get formControls() {
    return this.feedbackForm.controls
  }
  get answer1(){
    return this.formControls['answer1']
  }
  get answer2(){
    return this.formControls['answer2']
  }
  get answer3(){
    return this.formControls['answer3']
  }
  get answer4(){
    return this.formControls['answer4']
  }
  get answer5(){
    return this.formControls['answer5']
  }
  get answer6(){
    return this.formControls['answer6']
  }
  get answer7(){
    return this.formControls['answer7']
  }
  get answer8(){
    return this.formControls['answer8']
  }
  get answer9(){
    return this.formControls['answer9']
  }
  get answer10(){
    return this.formControls['answer10']
  }

  onSubmitFeedback(){
    const user:User=this.authService.loggedInUser.value;
    if(this.feedbackForm.valid){
      const newFeedback:UserFeedback={
        answer1:this.answer1.value,
        answer2:this.answer2.value,
        answer3:this.answer3.value,
        answer4:this.answer4.value,
        answer5:this.answer5.value,
        answer6:this.answer6.value,
        answer7:this.answer7.value,
        answer8:this.answer8.value,
        answer9:this.answer9.value,
        answer10:this.answer10.value,
        feedback:this.feedback,
        user:user,
        date:new Date()
      }
      this.feedbackService.submitFeedback(newFeedback).subscribe(data=>{
        this.router.navigate(dashboardUrl(user))
      });
    }
    
  }
}
