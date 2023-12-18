import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { LandheadingComponent } from './landheading/landheading.component';
import { AppRoutingModule } from './app.routes';
import { LoggedheadingComponent } from './loggedheading/loggedheading.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './landingpage/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandhomeComponent } from './landingpage/landhome/landhome.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './landingpage/signup/signup.component';

@NgModule({
  declarations: [
   LoggedHomeComponent, LandheadingComponent,
    LoggedheadingComponent, LandingpageComponent,
    LoginComponent, LandhomeComponent, SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ LoggedHomeComponent, LandheadingComponent, LoggedheadingComponent,
  LandingpageComponent, LoginComponent, LandhomeComponent, SignupComponent]
})
export class AppModule { }
