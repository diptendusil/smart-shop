import { Injectable } from '@angular/core';
import { User } from "../site/user"
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = `${environment.baseUrl}/user-authentication-service`;



  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string): Observable<HttpResponse<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
      }),
    };
    return this.httpClient.get(`${this.baseUrl}/authenticate`, {
      headers: httpOptions.headers,
      observe: 'response'
    });
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/users`, user)
  }
  userExists(username: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseUrl}/users?username=${username}`);
  }
  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${username}`);
  }
  getAllSecretQuestions(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/secret-questions`);
  }
  addManager(user:User):Observable<User>{
    return this.httpClient.post<User>(`${this.baseUrl}/managers`, user)
  }


  updateUser(user:User):Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/users`, user)
  }

}
