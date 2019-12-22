import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/site/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {
  adminDeleted: boolean;
  admin: User[];
  adminTemp: User[];
  statusAdmin: FormControl = new FormControl('All');
  emptyAdmin: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getAprovedAdmin().subscribe((admin:User[])=>
    {
      if(admin === null || admin === [] || admin.length === 0) {
        this.emptyAdmin = true;
      }
      else {
        this.emptyAdmin = false;
        this.admin = [...admin];
        this.adminTemp = [...admin];
      }
       
    })
    this.statusAdmin.valueChanges.subscribe((dataAdmin) => {
      //console.log(data);
      if(dataAdmin === 'All') {
        if(this.adminTemp.length === 0) {
          this.emptyAdmin=true;
        }
        else {
          this.emptyAdmin = false;
          this.admin = [...this.adminTemp];
        }
      }
      else {
        const res = this.adminTemp.filter(admin => admin.status === dataAdmin);
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
  deleteAdmin(userId: string) {
    this.userService.deleteAdmin(userId).subscribe((admin: User[]) => {
      this.adminDeleted = true;
      this.admin = [...admin];
      this.adminTemp = [...admin];
    }, () => {
      this.adminDeleted = false;
    })
  }
}
