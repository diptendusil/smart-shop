import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback, UserFeedback } from '../site/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl = `${environment.baseUrl}/user-authentication-service`;
  constructor(private httpClient:HttpClient) { }

  getAllUserFeedbacks(): Observable<UserFeedback[]> {
    return this.httpClient.get<UserFeedback[]>(`${this.baseUrl}/users/feedback`);
  }

  getFeedback(feedbackId:number):Observable<Feedback>{
    return this.httpClient.get<Feedback>(`${this.baseUrl}/users/feedback/${feedbackId}`)
  }

  submitFeedback(feedback:UserFeedback){
    return this.httpClient.post<void>(`${this.baseUrl}/users/feedback`,feedback)
  }
}
