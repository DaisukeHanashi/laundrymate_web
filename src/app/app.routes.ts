import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoggedHomeComponent } from './logged-home/logged-home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './landingpage/login/login.component';
import { LandhomeComponent } from './landingpage/landhome/landhome.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './landingpage/signup/signup.component';

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
            component: LoginComponent
          },
          {
            path: 'signup',
            component: SignupComponent
          }
        ]
   
     },
     {
      path: 'LoggedHome',
      component: LoggedHomeComponent
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

