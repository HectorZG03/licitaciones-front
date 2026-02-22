import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-home-usuario',
  standalone: true,
  templateUrl: './home-usuario.html',
  styleUrl: './home-usuario.css'
})
export class HomeUsuarioComponent {
  username = '';

  constructor(private auth: AuthService, private router: Router) {
    this.username = this.auth.getLoggedUser();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}