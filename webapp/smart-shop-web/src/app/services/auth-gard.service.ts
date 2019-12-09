import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Role } from '../site/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = next.data['role'];
    return this.checkLogin(role);
  }
  checkLogin(role: Role): boolean {
    const loggedInUser = this.authService.loggedInUser.value;
    if (loggedInUser) {
      if (loggedInUser.role === role) {
        return true;
      }
      else {
        if (!role) {
          return true;
        }
        else {
          this.router.navigate(['/unauthorized']);
        }
      }
    }
    else {
      this.router.navigate(['/login']);
    }
    return false;
  }

}
