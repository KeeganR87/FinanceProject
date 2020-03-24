import { Injectable } from '@angular/core';
import { LoginGuardService } from '../../authoguards/login/login-guard.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {

  constructor(private router: Router, private loginService: LoginGuardService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isUserLoggedIn) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
