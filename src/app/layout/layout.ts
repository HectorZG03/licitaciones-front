import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,    // 👈 Necesario para *ngIf, class bindings, etc.
    RouterModule     // 👈 Necesario para routerLink, routerLinkActive y router-outlet
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'] // 👈 también corregí styleUrl -> styleUrls
})
export class Layout {
  username = '';
  rol = '';
  constructor(private auth: AuthService, private router: Router) {
    this.username = this.auth.getLoggedUser();
    this.rol = this.auth.getRol() ?? '';
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}