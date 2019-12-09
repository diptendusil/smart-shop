import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User, RoleName } from '../user';
import { switchMap, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { dashboardUrl } from '../user-navigation-handler';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = this.formBuilder.group({
    username: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*')], asyncValidators: [this.isUsernameTaken.bind(this)] }],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]],
    age: ['', [Validators.required, Validators.min(15)]],
    contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    gender: ['M', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), this.matchConfirmPassword.bind(this)]],
    secretQuestion1: ['', Validators.required],
    secretQuestion2: ['', [Validators.required]],
    secretQuestion3: ['', [Validators.required]],
    secretAnswer1: ['', [Validators.required]],
    secretAnswer2: ['', [Validators.required]],
    secretAnswer3: ['', [Validators.required]]
  });
  signUpError = false;
  signUpSuccess = false;
  secretQuestions = [];
  formLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.userService.getAllSecretQuestions().subscribe(questions => {
      this.secretQuestions = questions
      this.formLoaded = true;
    });
  }
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.password.value) {
        return { 'noMatch': true };
      }
    }
    return null;
  }
  get formControls() {
    return this.signUpForm.controls
  }
  get username() {
    return this.formControls['username'];
  }
  get firstName() {
    return this.formControls['firstName'];
  }
  get lastName() {
    return this.formControls['lastName'];
  }
  get age() {
    return this.formControls['age'];
  }
  get contact() {
    return this.formControls['contact'];
  }
  get gender() {
    return this.formControls['gender'];
  }
  get password() {
    return this.formControls['password'];
  }
  get confirmPassword() {
    return this.formControls['confirmPassword']
  }
  get secretQuestion1() {
    return this.formControls['secretQuestion1'];
  }
  get secretQuestion2() {
    return this.formControls['secretQuestion2'];
  }
  get secretQuestion3() {
    return this.formControls['secretQuestion3'];
  }
  get secretAnswer1() {
    return this.formControls['secretAnswer1'];
  }
  get secretAnswer2() {
    return this.formControls['secretAnswer2'];
  }
  get secretAnswer3() {
    return this.formControls['secretAnswer3'];
  }
  submit() {
    if (this.signUpForm.valid) {
      const newUser: User = {
        userId: this.username.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        age: this.age.value,
        contact: this.contact.value,
        gender: this.gender.value,
        password: this.password.value,
        secretQuestion1: this.secretQuestion1.value,
        secretQuestion2: this.secretQuestion2.value,
        secretQuestion3: this.secretQuestion3.value,
        secretAnswer1: this.secretAnswer1.value,
        secretAnswer2: this.secretAnswer2.value,
        secretAnswer3: this.secretAnswer3.value,
      }
      this.activatedRoute.data.subscribe(data => {
        switch (data['role']) {
          case RoleName.ROLE_ADMIN:
            this.userService.addManager(newUser).pipe(
              switchMap(user => this.authService.login(user.userId, this.password.value))
            ).subscribe((res: HttpResponse<any>) => {
              this.authService.setToken(res.body['token']);
              this.signUpSuccess = true;
            },
              () => {
                this.signUpError = true;
              },
              () => this.getUser());
            break;
         default:
            this.userService.addUser(newUser).pipe(
              switchMap(user => this.authService.login(user.userId, this.password.value))
            ).subscribe((res: HttpResponse<any>) => {
              console.log(res);

              this.authService.setToken(res.body['token']);
              this.signUpSuccess = true;
            },
              () => {
                console.log('here');

                this.signUpError = true;
              },
              () => this.getUser());
            break;
        }
      })
    }
  }
  getUser() {
    this.userService.getUser(this.username.value).subscribe(
      user => {
        this.authService.loggedInUser.next(user);
        const redirectUrl = dashboardUrl(user);
        setTimeout(() => this.router.navigate(redirectUrl), 2000);
      });
  }
  isUsernameTaken(userName: FormControl): Promise<any> | Observable<any> {
    return this.userService.userExists(userName.value)
      .pipe(
        map(value => value ? new Object({ 'userNameTaken': value }) : null));
  }
}
