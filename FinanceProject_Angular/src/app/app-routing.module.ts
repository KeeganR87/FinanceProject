import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './authoguards/login/login-guard.service';
import { Auth1Service } from './auth_services/auth1.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [Auth1Service]},
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
