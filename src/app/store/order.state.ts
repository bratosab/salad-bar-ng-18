import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SetName, SetTel } from './order.action';

export interface OrderStateModel {
  name: string;
  tel: string;
}

@State<OrderStateModel>({
  name: 'order',
  defaults: {
    name: '',
    tel: '',
  },
})
@Injectable()
export class OrderState {
  @Action(SetName)
  setName(ctx: StateContext<OrderStateModel>, action: SetName) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      name: action.name,
    });
  }

  @Action(SetTel)
  setTel(ctx: StateContext<OrderStateModel>, action: SetTel) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      tel: action.tel,
    });
  }
}
