import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('[A-Za-z0-9]*')]],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]],
    lastName: ['', [Validators.required,  Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]],
    age: ['', [Validators.required, Validators.min(15)]],
    contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    gender: ['Male', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), this.matchConfirmPassword.bind(this)]],
    secretQuestion1: ['', Validators.required],
    secretQuestion2: ['', [Validators.required]],
    secretQuestion3: ['', [Validators.required]],
    secretAnswer1: ['', [Validators.required]],
    secretAnswer2: ['', [Validators.required]],
    secretAnswer3: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
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
  get confirmPassword(){
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
    console.log(this.signUpForm.value);
    
  }
}
