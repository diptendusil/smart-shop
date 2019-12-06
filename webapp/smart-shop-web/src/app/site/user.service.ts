import { Injectable } from '@angular/core';
import {User} from "./user"
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;
  baseUrl=environment.baseUrl;



  constructor(private httpClient:HttpClient) { }

  authenticate ()
  {

  }

  addUser()
  {

  }
  getUser()
  {

  }


}
