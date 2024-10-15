import { Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { saladRoutes } from './salad/salad.routes';

export const routes: Routes = [
  { path: '', component: OrderComponent },
  {
    path: 'kitchen',
    loadComponent: () =>
      import('./kitchen/kitchen.component').then((c) => c.KitchenComponent),
  },
  ...saladRoutes,
];
