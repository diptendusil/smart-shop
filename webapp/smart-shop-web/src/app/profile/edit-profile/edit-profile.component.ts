import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  signUpForm: FormGroup = this.formBuilder.group({
    username: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*')] }],
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]],
    age: ['', [Validators.required, Validators.min(15)]],
    contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    gender: ['M', [Validators.required]],
    secretQuestion1: ['', Validators.required],
    secretQuestion2: ['', [Validators.required]],
    secretQuestion3: ['', [Validators.required]],
    secretAnswer1: ['', [Validators.required]],
    secretAnswer2: ['', [Validators.required]],
    secretAnswer3: ['', [Validators.required]]
  });
  editError = false;
  editSuccess = false;
  allowEdit = false;
  secretQuestions = [];

  disabledButton = false;

  genderText = {'M': 'Male', 'F': 'Female'}

  buttonText = "";

  constructor( 
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.userService.getAllSecretQuestions().subscribe(questions => {
      this.secretQuestions = questions;
    });
    this.authService.loggedInUser.subscribe((user) => {
      this.username.setValue(user.userId);
      this.firstName.setValue(user.firstName);
      this.lastName.setValue(user.lastName);
      this.age.setValue(user.age);
      this.contact.setValue(user.contact);
      this.gender.setValue(user.gender);
      this.secretQuestion1.setValue(user.secretQuestion1);
      this.secretAnswer1.setValue(user.secretAnswer1);
      this.secretQuestion2.setValue(user.secretQuestion2);
      this.secretAnswer2.setValue(user.secretAnswer2);
      this.secretQuestion3.setValue(user.secretQuestion3);
      this.secretAnswer3.setValue(user.secretAnswer3);
    })
  }


  submit() {
    if(this.allowEdit === false) {
      this.allowEdit = !this.allowEdit;
      this.buttonText = "Save";
      console.log(this.allowEdit);
    }
    else {
      console.log(this.signUpForm.value);
    }
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

}
