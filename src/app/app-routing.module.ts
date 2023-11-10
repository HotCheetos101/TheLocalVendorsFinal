import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { VendorMainPageComponent } from './vendor-main-page/vendor-main-page.component';
import { VendorAddItemComponent } from './vendor-add-item/vendor-add-item.component';
import { LoginUserComponent } from './login-user/login-user.component'; 
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';      
const routes: Routes = [
 {path: '', component: LoginPageComponent},
 {path: 'login-vendor', component: LoginVendorComponent},
 {path: 'main-vendor', component: VendorMainPageComponent},
 {path: 'add-item-vendor', component: VendorAddItemComponent},
 {path: 'login-user', component: LoginUserComponent},
 {path: 'vendor-registration', component: RegisterVendorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
