import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dashboardUrl } from '../user-navigation-handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFailed = false;
  unauthorized = false;
  error = false;
  showPass: boolean = false;

  forbidden: boolean = false;

  constructor(private authService: AuthService, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.authService.loggedInUser.value) {
      const redirectUrl = dashboardUrl(this.authService.loggedInUser.value);
      this.router.navigate(redirectUrl);
    }
    this.forbidden = this.route.snapshot.queryParams['error'] === 'forbidden';
    this.loginForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required, Validators.maxLength(20)]),
        'password': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z 0-9]+$'), Validators.maxLength(50)])
      }
    )
  }
  

  get username() {
    return this.loginForm.get('username');


  }
  get password() {
    return this.loginForm.get('password');
  }
  loginUser() {
    if(this.loginForm.valid) {
      this.authService.login(this.username.value, this.password.value).subscribe(
        (res: HttpResponse<any>) => {
          this.authService.setToken(res.body['token'])
        },
        (res: HttpErrorResponse) => {
          const statusCode = res.status;
          console.log(statusCode);
          if(statusCode === 401) {
            this.loginFailed = true;
            this.unauthorized = false;
            this.error = false;
          }
          else if(statusCode === 403) {
            this.unauthorized = true;
            this.loginFailed = false;
            this.error = false;
          }
          else {
            this.error = true;
            this.unauthorized = false;
            this.loginFailed = false;
          }
          
        },
        () => {
          this.userService.getUser(this.username.value).subscribe(user => {
            this.authService.loggedInUser.next(user);
            const redirectUrl = dashboardUrl(user);
            this.router.navigate(redirectUrl);
          })
        }
      )

    }
  }

  showPassword() {
    this.showPass = !this.showPass;
  }
}
