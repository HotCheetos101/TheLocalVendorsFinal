import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FooterComponent } from './footer/footer.component';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { VendorMainPageComponent } from './vendor-main-page/vendor-main-page.component';
import { VendorSideBarComponent } from './vendor-side-bar/vendor-side-bar.component';
import { VendorAddItemComponent } from './vendor-add-item/vendor-add-item.component';
import { VendorItemPageComponent } from './vendor-item-page/vendor-item-page.component';
import { CurrencyCalcuVendorComponent } from './currency-calcu-vendor/currency-calcu-vendor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    AppComponent,
    HeaderUserComponent,
    FooterComponent,
    LoginVendorComponent,
    FooterComponent,
    RegisterVendorComponent,
    VendorMainPageComponent,
    SideBarComponent,
    VendorSideBarComponent,
    VendorAddItemComponent,
    VendorItemPageComponent,
    VendorAddItemComponent,
    CurrencyCalcuVendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
