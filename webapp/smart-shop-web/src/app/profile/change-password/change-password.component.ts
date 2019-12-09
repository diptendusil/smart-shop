import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  editForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required
      ]),
      'newPassword': new FormControl('', [
        Validators.required
      ])
    });

    this.authService.loggedInUser.subscribe((user) => {
      this.username.setValue(user.userId);
    })
  }

  editPassword() {
    console.log(this.editForm.value);
  }

  get username() {
    return this.editForm.get('username');
  }

  get password() {
    return this.editForm.get('password');
  }

  get newPassword() {
    return this.editForm.get('newPassword');
  }

}
