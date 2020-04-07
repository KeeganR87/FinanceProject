import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Auth1Service } from './auth_services/1/auth1.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [Auth1Service]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
