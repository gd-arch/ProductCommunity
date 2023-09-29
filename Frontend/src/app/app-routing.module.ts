import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RequestReviewComponent } from './request-review/request-review.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"register",component:RegisterComponent},
  {path:"review",component:ReviewComponent,canActivate:[AuthGuard]},
  {path:"request",component:RequestReviewComponent,canActivate:[AuthGuard]},
  {path:"",redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
