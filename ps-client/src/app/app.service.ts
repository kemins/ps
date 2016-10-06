import { Injectable } from '@angular/core';
import {IPSResponse} from "./core/ps-response";

@Injectable()
export class AppState {
  _state = {};

  constructor() {
  }

  // already return a clone of the current state
  get state() {
    return this._state = this._clone(this._state);
  }

  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    return this.state[prop];
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  showNotification = (data: IPSResponse) => {

    this.set('notificationMessage', data ? data.message : null);
    this.set('notificationType', data ? data.type : null);
  };

  _clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
