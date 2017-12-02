import { Action } from '@ngrx/store';

export interface IPayloadAction<T = any> extends Action {
  payload?: T;
}
