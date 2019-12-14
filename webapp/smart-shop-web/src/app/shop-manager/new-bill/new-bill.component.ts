import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  billForm: FormGroup = this.formBuilder.group({
    username: ['', {
    }], 
    name: ['', {
    }]
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {

  }

  loadName() {
    this.userService.getUser(this.username.value).subscribe((user:User) => {
      this.name.setValue(user.firstName + ' ' + user.lastName);
    }, () => {
      this.name.setValue('');
      this.username.setErrors(Validators.required);
    })
  }
  
  get username() {
    return this.billForm.get('username');
  }

  get name() {
    return this.billForm.get('name');
  }

}
