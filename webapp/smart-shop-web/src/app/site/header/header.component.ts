import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { dashboardUrl } from '../user-navigation-handler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: User = null;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedInUser.subscribe(user => this.loggedInUser = user);
  }

  logout() {
    this.authService.logout();
  }

  home() {
    if(this.authService.loggedInUser.value) {
      const redirectUrl = dashboardUrl(this.authService.loggedInUser.value);
      this.router.navigate(redirectUrl);
    }
    else {
      this.router.navigate(["/"]);
    }
  }
}
