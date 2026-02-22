import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HomeMaestroComponent } from './pages/home-maestro/home-maestro';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario';
import { authGuard, roleGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'home-maestro',
    component: HomeMaestroComponent,
    canActivate: [authGuard, roleGuard('MAESTRO')]
  },
  {
    path: 'home-usuario',
    component: HomeUsuarioComponent,
    canActivate: [authGuard, roleGuard('USUARIO')]
  },

  { path: '**', redirectTo: 'login' }
];