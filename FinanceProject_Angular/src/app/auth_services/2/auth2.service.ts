import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginGuardService } from 'src/app/authoguards/login/login-guard.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  constructor(private router: Router, private authservice: LoginGuardService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authservice.isUserAdmin) {
      return true;
    } else {
      alert('You do not have Admin Level Access. Please sign in to an Admin account to access this functionality.');
      return false;
    }
  }
}
