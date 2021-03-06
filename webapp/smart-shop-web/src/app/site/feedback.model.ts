import { User } from './user';

export interface Feedback{
    feedbackId:number,
    question1:string,
    question2:string,
    question3:string,
    question4:string,
    question5:string,
    question6:string,
    question7:string,
    question8:string,
    question9:string,
    question10:string
}

export interface UserFeedback{
    userFeedbackId?:number,
    date?:Date,
    answer1:string,
    answer2:string,
    answer3:string,
    answer4:string,
    answer5:string,
    answer6:string,
    answer7:string,
    answer8:string,
    answer9:string,
    answer10:string,
    feedback:Feedback,
    user:User
}