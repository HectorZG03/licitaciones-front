import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html'
})
export class HomeComponent {
  username = '';

  constructor(private auth: AuthService, private router: Router) {
    this.username = this.auth.getLoggedUser();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}