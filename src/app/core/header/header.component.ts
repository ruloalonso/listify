import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) {
  }
  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.authService.token = localStorage.getItem('token');
      this.authService.username = localStorage.getItem('username');
    }
  }
  onLogout() {
    this.authService.logout();
  }
}
