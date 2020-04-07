import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Auth1Service } from './auth_services/1/auth1.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlankComponent } from './blank/blank.component';
import { HomeComponent } from './home/home.component';
import { Auth3Service } from './auth_services/3/auth3.service';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [Auth1Service]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'blank', component: BlankComponent },
  { path: 'home', component: HomeComponent, canActivate: [Auth1Service, Auth3Service]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
