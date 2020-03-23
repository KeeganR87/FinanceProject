import { Injectable } from '@angular/core';
import { User } from 'src/app/objects/user/user';
import { UserService } from 'src/app/objects/user/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  newUser: User;
  invalidLogin = true;
  dataUser: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  authenticate(user: User) {
    this.userService.loginUser(user)
    .subscribe(
      data => {
        if (data !== null) {
          this.dataUser = data as User;
          sessionStorage.setItem('Username', this.dataUser.uName);
          sessionStorage.setItem('role', 'Admin');
          this.router.navigate(['']);
          this.invalidLogin = false;
        }
      }
    );
  }

  isUserAdmin() {
    const user = sessionStorage.getItem('role');
    console.log((user === 'Admin'));
    return (user === 'Admin');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('Username');
    return !(user === null);
  }

  isUserLoggingIn() {
    if (this.router.url === '/login') {
      return true;
    } else {
      this.router.navigate(['']);
    }
  }

  isUserLoggingOut() {
    if (this.router.url === '/logout') {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }

  logout() {
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('role');
    this.router.navigate(['logout']);
  }

}
