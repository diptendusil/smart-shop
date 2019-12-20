import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddItemComponent } from './product/add-item/add-item.component';
import { ItemDetailsComponent } from './product/item-details/item-details.component';
import { ItemEditComponent } from './product/item-edit/item-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BillingComponent } from './shop-manager/billing/billing.component';
import { InventoryComponent } from './shop-manager/inventory/inventory.component';
import { ManageOffersComponent } from './shop-manager/manage-offers/manage-offers.component';
import { NewBillComponent } from './shop-manager/new-bill/new-bill.component';
import { ShopManagerDashboardComponent } from './shop-manager/shop-manager-dashboard/shop-manager-dashboard.component';
import { LoginComponent } from './site/login/login.component';
import { SignUpComponent } from './site/sign-up/sign-up.component';
import { RoleName } from './site/user';
import { SuperAdminDashboardComponent } from './super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { PurchaseHistoryComponent } from './user/purchase-history/purchase-history.component';
import { PurchaseItemComponent } from './user/purchase-history/purchase-item/purchase-item.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { ForgotPasswordComponent } from './site/forgot-password/forgot-password.component';
import { ResetComponent } from './site/reset/reset.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: UserDashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent

  },

  {
    path:'resetPassword/:id',
    component:ResetComponent

  },
  
  {
    path: 'user/dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_USER
    }
  },
  {
    path: 'user/purchase-history',
    component: PurchaseHistoryComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_USER
    }
  },
  {
    path: 'user/feedback',
    component: FeedbackComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_USER
    }
  },
  {
    path: 'user/purchase-history/purchase-items/:id',
    component: PurchaseItemComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_USER
    }
  },
  {
    path: 'mgr/purchase-history/purchase-items/:id',
    component: PurchaseItemComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_MANAGER
    }
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_ADMIN
    }
  },
  {
    path: 'admin/manager-sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_ADMIN
    }
  },
  {
    path: 'super-user/dashboard',
    component: SuperAdminDashboardComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_SUPER_USER
    }
  },
  {
    path: 'manager/dashboard',
    component: ShopManagerDashboardComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_MANAGER
    }
  },
  {
    path: 'manager/dashboard/inventory',
    component: InventoryComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_MANAGER
    }
  },
  {
    path: 'manager/bill',
    component: BillingComponent,
    canActivate: [AuthGuardService],
    data: {
      role:RoleName.ROLE_MANAGER
    }
  },
  {
    path: 'manager/offers',
    component: ManageOffersComponent,
    // canActivate: [AuthGuardService],
    // data: {
    //   role: RoleName.ROLE_MANAGER
    // }
  },
  {
    path: 'purchase-history',
    component: PurchaseHistoryComponent,
    canActivate: [AuthGuardService],
    data: {
      role: RoleName.ROLE_USER
    }
  },
  {
    path: 'manager/bill/new',
    component: NewBillComponent,
    canActivate: [AuthGuardService],
    data: {
      role:RoleName.ROLE_MANAGER
    }
  },
  {
    path: 'account',
    component: EditProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "edit/password",
    component: ChangePasswordComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-list/details/:id',
    component: ItemDetailsComponent
  },
  {
    path:'product/:id/edit',
    component:ItemEditComponent
  }
,
{
  path:'product/add',
  component:AddItemComponent

},
{
  path: 'super-user/admin-sign-up',
  component: SignUpComponent,
  canActivate: [AuthGuardService],
  data:{
    role:RoleName.ROLE_SUPER_USER
  }
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
