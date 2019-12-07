import { Injectable } from '@angular/core';
import { User } from "../site/user"
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  baseUrl = environment.baseUrl;



  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string): Observable<HttpResponse<any>> {
    return null;
  }

  addUser() {

  }
  getUser() {

  }


}
