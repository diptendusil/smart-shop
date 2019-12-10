import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  managers: User[];
  success: boolean = false;
  failure: boolean = false;

  genders = {'M': 'Male', 'F': 'Female'};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getApprovedManagers().subscribe((managers: User[]) => {
      this.managers = [...managers];
    })
  }

  deleteManager(userId: string) {
    this.userService.deleteManager(userId).subscribe((managers: User[]) => {
      this.success = true;
      this.failure = false;
      this.managers = [...managers];
    }, () => {
      this.failure = true;
      this.success = false;
    })
  }

}
