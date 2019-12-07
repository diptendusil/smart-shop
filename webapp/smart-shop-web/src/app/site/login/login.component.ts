import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFailed = false;


  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required, Validators.maxLength(20)]),
        'password': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z 0-9]+$'), Validators.maxLength(50)])
      }
    )
  }
  isLoginValid() {

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
          this.loginFailed = true
        },
        () => {
          this.userService.getUser(this.username.value).subscribe(user => {
            this.authService.loggedInUser.next(user);
            this.router.navigate(['/'])
          })
        }
      )

    }
  }
}
