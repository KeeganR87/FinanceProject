import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginGuardService } from 'src/app/authoguards/login/login-guard.service';

@Injectable({
  providedIn: 'root'
})
export class Auth3Service {

  constructor(private router: Router, private auth: LoginGuardService) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLoggingIn()) {
      return true;
    } else {
      return false;
    }
  }
}
