import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../objects/user/user';
import { Router } from '@angular/router';
import { LoginGuardService } from '../authoguards/login/login-guard.service';
import { UserService } from '../objects/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  user: User = new User();
  submitted = false;
  failed = false;
  dataUser: User = new User();
  invalidLogin = true;

  constructor(private router: Router, private loginService: LoginGuardService, private userService: UserService) { }

  ngOnInit() {
    if (this.router.url === '/base') {
      window.location.reload();
    }
    this.dataUser = new User();
    this.failed = false;
    this.invalidLogin = true;
  }

  ngAfterViewInit() {

  }

  validate() {
    this.authenticate(this.user);
  }

  returned() {
    if (!this.invalidLogin) {
      this.failed = false;
      return;
    } else {
      this.failed = true;
    }
  }

  authenticate(user: User) {
    this.userService.loginUser(user)
    .subscribe(
      data => {
        if (data !== null) {
          this.dataUser = data as User;
          sessionStorage.setItem('Username', this.dataUser.uName);
          sessionStorage.setItem('role', 'Admin');
          this.router.navigate(['/base/loggingIn']);
          this.invalidLogin = false;
        }
        this.returned();
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.validate();
  }

}
