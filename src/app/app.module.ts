import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggedHomeComponent } from './loggedpage/logged-home/logged-home.component';
import { LandheadingComponent } from './landheading/landheading.component';
import { AppRoutingModule } from './app.routes';
import { LoggedheadingComponent } from './loggedheading/loggedheading.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './landingpage/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandhomeComponent } from './landingpage/landhome/landhome.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './landingpage/signup/signup.component';
import { BusinessregComponent } from './landingpage/signup/businessreg/businessreg.component';
import { DriverregComponent } from './landingpage/signup/driverreg/driverreg.component';
import { LoggedpageComponent } from './loggedpage/loggedpage.component';

@NgModule({
  declarations: [
   LoggedHomeComponent, LandheadingComponent,
    LoggedheadingComponent, LandingpageComponent,
    LoginComponent, LandhomeComponent, SignupComponent,
    BusinessregComponent, DriverregComponent, LoggedpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ LoggedHomeComponent, LandheadingComponent, LoggedheadingComponent,
  LandingpageComponent, LoginComponent, LandhomeComponent, SignupComponent,
BusinessregComponent, DriverregComponent, LoggedpageComponent]
})
export class AppModule { }
