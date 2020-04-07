import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/home/loggingIn') {
      this.router.navigateByUrl('/blank', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
      });
    }
  }

}
