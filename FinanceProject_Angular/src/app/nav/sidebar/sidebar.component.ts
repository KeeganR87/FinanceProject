import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginGuardService } from 'src/app/authoguards/login/login-guard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  isAdmin = false;

  constructor(private auth: LoginGuardService) { }

  ngOnInit(): void {
    this.isAdmin = false;
    this.AdminCheck();
  }

  public onSidenavClose = () => {
    this.sidenavToggle.emit();
    this.AdminCheck();
  }

  AdminCheck() {
    if (this.auth.isUserAdmin()) {
      this.isAdmin = true;
      return;
    } else {
      return;
    }
  }

}
