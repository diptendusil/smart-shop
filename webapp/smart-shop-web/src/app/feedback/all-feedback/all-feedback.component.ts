import { Component, OnInit } from '@angular/core';
import { UserFeedback } from 'src/app/site/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-feedback',
  templateUrl: './all-feedback.component.html',
  styleUrls: ['./all-feedback.component.css']
})
export class AllFeedbackComponent implements OnInit {
  feedbacks: UserFeedback[] = [];
  constructor(private feedbackService: FeedbackService, private userService: UserService) { }

  ngOnInit() {
    this.feedbackService.getAllUserFeedbacks().subscribe((feedbacks) => {
      this.feedbacks = [...feedbacks]
    })
  }

}
