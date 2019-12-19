import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/site/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent implements OnInit {
   
  statusAdmin:FormControl;
  status:FormControl;
  admin:User[]=[];
  adminTemp:User[]=[];
  managers: User[] = [];
  managersTmp: User[] = [];
  succ:boolean=false;
  success: boolean = false;
  successAdmin:boolean=false;
  failureAdmin:boolean=false;
  failure: boolean = false;
  fail:boolean=false;

  empty: boolean = false;
  emptyAdmin:boolean=false;

  genders = {'M': 'Male', 'F': 'Female'};

 

  constructor( private userService:UserService) { }

  ngOnInit() {
    this.userService.getApoorvedAdmin().subscribe((admin:User[])=>
    {
      if(admin === null || admin === [] || admin.length === 0) {
        this.emptyAdmin = true;
        console.log("Empty");
      }
      else {
        console.log("Not Empty");
        this.emptyAdmin = false;
        this.admin = [...admin];
        this.adminTemp = [...admin];
      }
       
    })
    
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
    
    this.statusAdmin=new FormControl('All');
    this.status = new FormControl('All');
    this.status.valueChanges.subscribe((data) => {
      //console.log(data);
      if(data === 'All') {
        if(this.managersTmp === null || this.managersTmp === [] || this.managersTmp.length === 0 ) {
          this.empty = true;
          this.emptyAdmin=true;
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
    this.status.valueChanges.subscribe((dataAdmin) => {
      //console.log(data);
      if(dataAdmin === 'All') {
        if(this.adminTemp === null || this.adminTemp === [] || this.adminTemp.length === 0 ) {
          
          this.emptyAdmin=true;
          console.log("Empty");
        }
        else {
          console.log("Not Empty");
          this.emptyAdmin = false;
          this.admin = [...this.adminTemp];
        }
      }
      else {
        const res = this.adminTemp.filter(admins => admins.status === dataAdmin);
        //console.log(res);
        if(res === null || res === [] || res.length === 0) {
          this.emptyAdmin = true;
          console.log("Empty");
        }
        else {
          console.log("Not Empty");
          this.emptyAdmin = false;
          this.admin = res;
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
  deleteAdmin(userId: string) {
    this.userService.deleteAdmin(userId).subscribe((admin: User[]) => {
      this.success = true;
      this.failure = false;
      this.admin = [...admin];
      this.adminTemp = [...admin];
    }, () => {
      this.failure = true;
      this.success = false;
    })
  }
  approveManager(userId:string)
  {
    this.userService.approveManger(userId).subscribe((manager:User[])=>
    {
      this.succ = true;
      this.fail = false;
      this.managers = [...manager];
      this.managersTmp = [...manager];
    }, () => {
      this.fail = true;
      this.succ = false;
    }
    

    )}
  }


