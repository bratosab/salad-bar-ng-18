import { createAction, props } from '@ngrx/store';

export enum AppActionTypes {
  SetName = '[APP] Set name',
}

export const SetName = createAction(
  AppActionTypes.SetName,
  props<{ name: string }>()
);
