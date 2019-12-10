import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User, Role } from 'src/app/site/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editError = false;
  editSuccess = false;
  allowEdit = false;
  secretQuestions = [];

  disabledButton = false;
  signUpForm: FormGroup = this.formBuilder.group({
    username: [{
      value: '',
      disabled: !this.allowEdit,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*')] 
    }],
    firstName: [{
      value:'',
      disabled: !this.allowEdit,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]
    }],
    lastName: [{
      value: '',
      disabled: !this.allowEdit,
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[A-Za-z ]*')]
    }],
    age: [{
      value:'',
      disabled: !this.allowEdit,
      validators: [Validators.required, Validators.min(15)]
    }],
    contact: [{
      value: '',
      disabled: !this.allowEdit,
      validators: [Validators.required, Validators.pattern('[0-9]{10}')]
    }],
    gender: [{
      value: 'M',
      disabled: !this.allowEdit,
      validators: [Validators.required]
    }],
    secretQuestion1: [{
      value: '',
      
      validators: Validators.required, 
      disabled: !this.allowEdit
    }],
    secretQuestion2: [{
      value:'',
      disabled: !this.allowEdit,
      validators: [Validators.required]
    }],
    secretQuestion3: [{
      value:'',
      disabled: !this.allowEdit,
      validators: [Validators.required]
    }],
    secretAnswer1: [{
      value: '',
      validators: [Validators.required]
    }],
    secretAnswer2: [{
      value: '', 
      disabled: !this.allowEdit,
      validators: [Validators.required]
    }],
    secretAnswer3: [{
      value: '',
      disabled: !this.allowEdit,
      validators: [Validators.required]
    }]
  });
  

  genderText = { 'M': 'Male', 'F': 'Female' }

  buttonText = "";

  role: Role;
  status: string;
  pwd: string;

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

      this.role = user.role;
      this.status = user.status;
      this.pwd = user.password
    })
  }


  submit() {
    if (this.allowEdit === false) {
      this.allowEdit = !this.allowEdit;
      this.buttonText = "Save";
      console.log(this.allowEdit);
    }
    else {
      console.log(this.signUpForm.value);

      if (this.signUpForm.valid) {
        const newUser: User = {
          userId: this.username.value,
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          age: this.age.value,
          contact: this.contact.value,
          gender: this.gender.value,
          secretQuestion1: this.secretQuestion1.value,
          secretQuestion2: this.secretQuestion2.value,
          secretQuestion3: this.secretQuestion3.value,
          secretAnswer1: this.secretAnswer1.value,
          secretAnswer2: this.secretAnswer2.value,
          secretAnswer3: this.secretAnswer3.value,
          
          role: this.role,
          status: this.status,
          password: this.pwd
        }

        this.userService.updateUser(newUser).subscribe((user: User) => {
          console.log(user);
        },
          () => {
            console.log("Error updating details");
            this.editError = false;
          },
          () => {
            this.editSuccess = true;
            this.allowEdit = !this.allowEdit;
            this.buttonText = "";
            
            this.authService.loggedInUser.next(newUser);
          }
        )
      }
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
