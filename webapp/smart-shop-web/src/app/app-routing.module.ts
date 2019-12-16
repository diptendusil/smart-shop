import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { SignUpComponent } from './site/sign-up/sign-up.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { ShopManagerDashboardComponent } from './shop-manager/shop-manager-dashboard/shop-manager-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleName } from './site/user';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { InventoryComponent } from './shop-manager/inventory/inventory.component';
import { ItemDetailsComponent } from './product/item-details/item-details.component';
import { ItemEditComponent } from './product/item-edit/item-edit.component';
import { AddItemComponent } from './product/add-item/add-item.component';
import { BillingComponent } from './shop-manager/billing/billing.component';
import { NewBillComponent } from './shop-manager/new-bill/new-bill.component';
import { PurchaseHistoryComponent } from './user/purchase-history/purchase-history.component';
import { PurchaseItemComponent } from './user/purchase-history/purchase-item/purchase-item.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path: 'user/purchase-history/purchase-items',
    component: PurchaseItemComponent,
    canActivate: [AuthGuardService],
    data:{
      role:RoleName.ROLE_USER
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

}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
