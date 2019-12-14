import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';
import { SignUpComponent } from './site/sign-up/sign-up.component';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ItemInfoComponent } from './product/item-info/item-info.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ShopManagerDashboardComponent } from './shop-manager/shop-manager-dashboard/shop-manager-dashboard.component';
import { SuperAdminDashboardComponent } from './super-admin/super-admin-dashboard/super-admin-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { ItemDetailsComponent } from './product/item-details/item-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { BillingComponent } from './shop-manager/billing/billing.component';
import { InventoryComponent } from './shop-manager/inventory/inventory.component';
import { SummaryComponent } from './shop-manager/inventory/summary/summary.component';
import { ManageProductsComponent } from './shop-manager/inventory/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './shop-manager/inventory/manage-categories/manage-categories.component';
import { ProductService } from './services/product.service';
import { ManageOffersComponent } from './shop-manager/manage-offers/manage-offers.component';
import { ItemEditComponent } from './product/item-edit/item-edit.component';
import { AddItemComponent } from './product/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    ItemInfoComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ShopManagerDashboardComponent,
    SuperAdminDashboardComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    ItemDetailsComponent,  
   BillingComponent
   , InventoryComponent, SummaryComponent, ManageProductsComponent, ManageCategoriesComponent,
  SummaryComponent, ManageProductsComponent, ProductListComponent, ItemEditComponent, AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UserService, ProductService, AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
