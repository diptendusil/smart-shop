import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../site/user';
import { UserService } from './user.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private _token: string = '';
  constructor(private userService: UserService, private router: Router) { }
  getToken(): string {
    return this._token;
  }
  setToken(token: string) {
    this._token = token;
  }
  login(username: string, password: string): Observable<HttpResponse<any>> {
    return this.userService.authenticate(username, password);
  }
  logout() {
    this.loggedInUser.next(null);
    this._token = null;
    this.router.navigate(["/login"]);

  }
}
