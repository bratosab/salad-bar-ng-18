import { inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SaladService } from '../providers/salad.service';
import { Store } from '@ngxs/store';
import { OrderState, OrderStateModel } from '../store/order.state';

export const saladGuard: CanActivateFn = (route, state) => {
  const saladService = inject(SaladService);
  const router = inject(Router);
  const store = inject(Store);

  const order = store.snapshot().order as OrderStateModel

  // if(saladService.name && saladService.tel) {
  //   return true;
  // } else {
  //   router.navigate(['/'])
  //   return false;
  // }

  if(order.name && order.tel) {
    return true;
  } else {
    router.navigate(['/'])
    return false;
  }
};
