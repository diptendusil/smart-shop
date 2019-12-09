import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignUpComponent } from './site/sign-up/sign-up.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { ShopManagerDashboardComponent } from './shop-manager/shop-manager-dashboard/shop-manager-dashboard.component';

import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { AuthGardService } from './services/auth-gard.service';
import { RoleName } from './site/user';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'user/dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGardService],
    data:{
      role:RoleName.ROLE_USER
    }
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGardService],
    data:{
      role:RoleName.ROLE_ADMIN
    }
  },
  {
    path: 'admin/manager-sign-up',
    component: SignUpComponent,
    canActivate: [AuthGardService],
    data:{
      role:RoleName.ROLE_ADMIN
    }
  },
  {
    path: 'super-user/dashboard',
    component: SuperAdminDashboardComponent,
    canActivate: [AuthGardService],
    data:{
      role:RoleName.ROLE_SUPER_USER
    }
  },
  {
    path: 'manager/dashboard',
    component: ShopManagerDashboardComponent
  },
  {
    path: 'account',
    component: EditProfileComponent
  },
  {
    path: 'edit/password',
    component: ChangePasswordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
