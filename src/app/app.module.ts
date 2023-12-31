import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginUserComponent } from './login-user/login-user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FooterComponent } from './footer/footer.component';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { VendorMainPageComponent } from './vendor-main-page/vendor-main-page.component';
import { VendorSideBarComponent } from './vendor-side-bar/vendor-side-bar.component';
import { VendorAddItemComponent } from './vendor-add-item/vendor-add-item.component';
import { CurrencyCalcuVendorComponent } from './currency-calcu-vendor/currency-calcu-vendor.component';
import { VendorItemPageComponent } from './vendor-item-page/vendor-item-page.component';
import { ForumTopicViewComponent } from './forum-topic-view/forum-topic-view.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { VendorEditPageComponent } from './vendor-edit-page/vendor-edit-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { VendorAccountPageComponent } from './vendor-account-page/vendor-account-page.component';
import { ProfileEditInfoComponent } from './profile-edit-info/profile-edit-info.component';
import { ProfilePageVendorComponent } from './profile-page-vendor/profile-page-vendor.component';
import { ProfileEditInfoVendorComponent } from './profile-edit-info-vendor/profile-edit-info-vendor.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';
import { VendorForumMainComponent } from './vendor-forum-main/vendor-forum-main.component';
import { VendorForumCommmentComponent } from './vendor-forum-commment/vendor-forum-commment.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorViewItemComponent } from './vendor-view-item/vendor-view-item.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { StorePageComponent } from './store-page/store-page.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { VendorDeleteItemComponent } from './vendor-delete-item/vendor-delete-item.component';
import { VendorHomepageComponent } from './vendor-homepage/vendor-homepage.component';
import { HeaderVendorComponent } from './header-vendor/header-vendor.component';
import { ProfilePageEditComponent } from './profile-page-edit/profile-page-edit.component';
import { VendorEditItemComponent } from './vendor-edit-item/vendor-edit-item.component';
import { VendorAccountPageEditComponent } from './vendor-account-page-edit/vendor-account-page-edit.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { VendorTransactionHistoryComponent } from './vendor-transaction-history/vendor-transaction-history.component';

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
    CurrencyConverterComponent,
    VendorSideBarComponent,
    VendorAddItemComponent,
    VendorItemPageComponent,
    CurrencyCalcuVendorComponent,
    ForumTopicViewComponent,
    LoginUserComponent,
    RegisterUserComponent,
    ForumMainComponent,
    ItemPageComponent,
    VendorEditPageComponent,
    ProfilePageComponent,
    VendorAccountPageComponent,
    ProfileEditInfoComponent,
    ProfilePageVendorComponent,
    ProfileEditInfoVendorComponent,
    ForumCommentsComponent,
    VendorForumMainComponent,
    VendorForumCommmentComponent,
    VendorDashboardComponent,
    VendorViewItemComponent,
    UserHomepageComponent,
    StorePageComponent,
    HamburgerMenuComponent,
    VendorDeleteItemComponent,
    VendorHomepageComponent,
    HeaderVendorComponent,
    ProfilePageEditComponent,
    VendorEditItemComponent,
    VendorAccountPageEditComponent,
    CheckoutComponent,
    TransactionHistoryComponent,
    VendorTransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
