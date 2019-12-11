import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  managers: User[] = [];
  managersTmp: User[] = [];

  success: boolean = false;
  failure: boolean = false;

  empty: boolean = false;

  genders = {'M': 'Male', 'F': 'Female'};

  status: FormControl;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getApprovedManagers().subscribe((managers: User[]) => {
      if(managers === null || managers === [] || managers.length === 0) {
        this.empty = true;
        console.log("Empty");
      }
      else {
        console.log("Not Empty");
        this.empty = false;
        this.managers = [...managers];
        this.managersTmp = [...managers];
      }
      
    })

    this.status = new FormControl('All');
    this.status.valueChanges.subscribe((data) => {
      //console.log(data);
      if(data === 'All') {
        if(this.managersTmp === null || this.managersTmp === [] || this.managersTmp.length === 0) {
          this.empty = true;
          console.log("Empty");
        }
        else {
          console.log("Not Empty");
          this.empty = false;
          this.managers = [...this.managersTmp];
        }
      }
      else {
        const res = this.managersTmp.filter(manager => manager.status === data);
        //console.log(res);
        if(res === null || res === [] || res.length === 0) {
          this.empty = true;
          console.log("Empty");
        }
        else {
          console.log("Not Empty");
          this.empty = false;
          this.managers = res;
        }
      }
    })
  }

  deleteManager(userId: string) {
    this.userService.deleteManager(userId).subscribe((managers: User[]) => {
      this.success = true;
      this.failure = false;
      this.managers = [...managers];
      this.managersTmp = [...managers];
    }, () => {
      this.failure = true;
      this.success = false;
    })
  }

}
