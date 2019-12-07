import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { User } from './site/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Smart Shop';
  loggedInUser: User = null;
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    this.authService.loggedInUser.subscribe(user => this.loggedInUser = user);
    // this.authService.setToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJST0xFX1NVUEVSX1VTRVIiLCJpYXQiOjE1NzU2OTY5NTgsImV4cCI6MTU3NTY5ODE1OH0.0qY62QdjKKoQnnIUpb3Y0gWUEuFaiTBFMAKCpR1u6PU');

    // this.http.get(`http://localhost:9080/user-authentication-service/users/admin`).subscribe(user => console.log(user));
  }
}
