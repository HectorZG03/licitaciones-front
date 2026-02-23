import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Layout } from './layout/layout';
import { HomeMaestroComponent } from './pages/home-maestro/home-maestro';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario';
import { Proveedores } from './pages/proveedores/proveedores';
import { ProveedorForm } from './pages/proveedores/proveedor-form/proveedor-form';
import { authGuard, roleGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      {
        path: 'home-maestro',
        component: HomeMaestroComponent,
        canActivate: [roleGuard('MAESTRO')]
      },
      {
        path: 'home-usuario',
        component: HomeUsuarioComponent,
        canActivate: [roleGuard('USUARIO')]
      },
      // Proveedores — accesible para ambos roles
      { path: 'proveedores', component: Proveedores },
      { path: 'proveedores/nuevo', component: ProveedorForm },
      { path: 'proveedores/editar/:id', component: ProveedorForm }
    ]
  },

  { path: '**', redirectTo: 'login' }
];