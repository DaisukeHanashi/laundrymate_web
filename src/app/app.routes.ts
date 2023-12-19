import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoggedHomeComponent } from './loggedpage/logged-home/logged-home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './landingpage/login/login.component';
import { LandhomeComponent } from './landingpage/landhome/landhome.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './landingpage/signup/signup.component';
import { BusinessregComponent as BusinessRegistration} from './landingpage/signup/businessreg/businessreg.component';
import { DriverregComponent } from './landingpage/signup/driverreg/driverreg.component';
import { LoggedpageComponent } from './loggedpage/loggedpage.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
      path: '',
      redirectTo: 'landing/Landhome',
      pathMatch: 'full'
      },
      {
        path:'landing',
        component: LandingpageComponent,
        children: [
          {
            path: 'Landhome',
            component: LandhomeComponent
          },
          {
            path: 'Login',
            component: LoginComponent,
            children:[
              {
                path: 'sign',
                redirectTo: '/landing/signup',
                pathMatch: 'full'
              }
            ]
          },
          {
            path: 'signup',
            component: SignupComponent,
            children: [
              {
                path: 'bus',
                redirectTo: '/landing/busreg',
                pathMatch: 'full'
              },
              {
                path: 'driver',
                redirectTo: '/landing/drivereg',
                pathMatch: 'full'
              }
            ]
          },
          {
            path: 'busreg',
            component: BusinessRegistration
          },
          {
            path: 'drivereg',
            component: DriverregComponent
          }
        ]
   
     },
     {
      path: 'Logged',
      component: LoggedpageComponent,
      children: [
        {
         path: '',
         redirectTo: 'LoggedHome',
         pathMatch : 'full'
        },
        {
        path: 'LoggedHome',
        component: LoggedHomeComponent
        }
      ]
    }
    ]
  }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

