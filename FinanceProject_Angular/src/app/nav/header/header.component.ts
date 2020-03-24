import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginGuardService } from 'src/app/authoguards/login/login-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggedIn = false;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private auth: LoginGuardService) { }

  ngOnInit(): void {
    this.LoggedIn = false;
    this.isLoggedIn();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  Logout() {
    this.auth.logout();
  }

  isLoggedIn() {
    if (this.auth.isUserLoggedIn) {
      this.LoggedIn = true;
      return;
    } else {
      return;
    }
  }

}
