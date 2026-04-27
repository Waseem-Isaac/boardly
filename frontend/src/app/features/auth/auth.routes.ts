import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'join',
    loadComponent: () => import('./join/join.component').then((m) => m.JoinComponent),
  },
  {
    path: 'set-password/:token',
    loadComponent: () =>
      import('./set-password/set-password.component').then((m) => m.SetPasswordComponent),
  },
  {
    path: '',
    redirectTo: 'join',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'join',
  },
];
