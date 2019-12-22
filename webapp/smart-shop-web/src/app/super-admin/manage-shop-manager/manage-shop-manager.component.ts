import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-shop-manager',
  templateUrl: './manage-shop-manager.component.html',
  styleUrls: ['./manage-shop-manager.component.css']
})
export class ManageShopManagerComponent implements OnInit {
  mgrApprove:boolean;
  mgrDelete:boolean;
  managers: User[];
  managersTmp: User[];
  mgrstatus = new FormControl('All');
  empty: boolean;

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
      
    });
    this.mgrstatus.valueChanges.subscribe((data) => {
      //console.log(data);
      if(data === 'All') {
        if(this.managersTmp === null || this.managersTmp === [] || this.managersTmp.length === 0 ) {
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
  approveManager(userId: string) {
    this.userService.approveManger(userId).subscribe((manager: User[]) => {
      this.mgrApprove = true;
      this.managers = [...manager];
      this.managersTmp = [...manager];
    }, () => {
      this.mgrApprove = false;
    })
  }
  deleteManager(userId: string) {
    this.userService.deleteManager(userId).subscribe((managers: User[]) => {
      this.mgrDelete = true;
      this.managers = [...managers];
      this.managersTmp = [...managers];
    }, () => {
      this.mgrDelete = false;
    })
  }
}
