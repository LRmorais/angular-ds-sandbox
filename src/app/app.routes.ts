import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default/default.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inputs',
        pathMatch: 'full',
      },
      {
        path: 'inputs',
        loadComponent: () => import('./pages/inputs/inputs.component').then(m => m.InputsComponent),
      }
    ]
  },
];
