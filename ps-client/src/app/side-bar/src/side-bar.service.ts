import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BarAction } from './../../footer-bar';
import { AppStore } from '../../app.state';
import { AppActions } from '../../app.actions';
import { BAR_ACTION } from '../../footer-bar';

@Injectable()
export class SideBarService {
  constructor(private store: Store<AppStore>) {
  }

  getActions = (): Observable<Array<BarAction>> => this.store.select<BarAction[]>('sideBarActions');

  setActions = (actions: BarAction[]) => this.store.dispatch({
    type: AppActions.SET_SIDE_BAR_ACTIONS,
    payload: actions
  });

  getCurrentAction = (): Observable<BarAction> => this.store.select<BarAction>('sideBarCurrentAction');

  setCurrentAction = (action: BarAction) => this.store.dispatch({
    type: AppActions.SET_CURRENT_ACTION,
    payload: action
  });

  setCurrentActionByName = (name: BAR_ACTION) => this.store.dispatch({
    type: AppActions.SET_CURRENT_ACTION_BY_NAME,
    payload: {
      actions: this.getActions(),
      name: name
    }
  });

  resetCurrentAction = () => this.store.dispatch({
    type: AppActions.SET_CURRENT_ACTION,
    payload: BAR_ACTION.NONE
  });
}

export const GUEST_ACTIONS = [{
  label: 'Home',
  link: '/home',
  icon: 'home'
}, {
  label: 'Sign In',
  name: BAR_ACTION.SIGN_IN,
  button: true,
  icon: 'account_circle'
}, {
  label: 'Sign Up',
  name: BAR_ACTION.SIGN_UP,
  button: true,
  icon: 'person_add'
}, {
  label: 'Contact Us',
  link: '/contact',
  icon: 'mail'
}];

export const USER_ACTIONS = [{
  label: 'Home',
  link: '/user/home',
  icon: 'home'
}, {
  label: 'Profile',
  name: BAR_ACTION.OPEN_PROFILE,
  button: true,
  icon: 'account_circle'
}, {
  label: 'Albums',
  icon: 'book',
  actions: [
    {
      label: 'My',
      link: '/user/albums',
      icon: 'person'
    },
    {
      label: 'Friends',
      link: '/user/albums',
      icon: 'group'
    },
    {
      label: 'Create',
      button: true,
      name: BAR_ACTION.CREATE_ALBUM,
      icon: 'library_add'
    }
  ]
}, {
  label: 'Contact Us',
  link: '/user/contact',
  icon: 'mail'
}];
