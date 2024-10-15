import { createReducer, on } from "@ngrx/store";
import { SetName } from "./app.actions";

export interface AppState {
    name: string;
    orderId: number;
    orderStatus?: 'pending' | 'success' | 'failed';
}

export const initialState: AppState = {
    name: '',
    orderId: Math.random() * 1000
}

export const appReducer = createReducer(
    initialState,
    on(SetName, (state, action) => ({ ...state, name: action.name }))
)