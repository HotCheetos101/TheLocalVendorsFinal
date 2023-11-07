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
<<<<<<< HEAD
import { SideBarComponent } from './side-bar/side-bar.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
=======
import { VendorMainPageComponent } from './vendor-main-page/vendor-main-page.component';
>>>>>>> 46f260b4dfb21fa7586d3d529c33f3c938757b94

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
<<<<<<< HEAD
    SideBarComponent,
CurrencyConverterComponent
=======
    VendorMainPageComponent
>>>>>>> 46f260b4dfb21fa7586d3d529c33f3c938757b94
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
