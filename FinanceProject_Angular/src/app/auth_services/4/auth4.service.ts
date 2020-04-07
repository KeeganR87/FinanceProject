import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginGuardService } from 'src/app/authoguards/login/login-guard.service';

@Injectable({
  providedIn: 'root'
})
export class Auth4Service {

  constructor(private router: Router, private auth: LoginGuardService) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLoggingOut()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
