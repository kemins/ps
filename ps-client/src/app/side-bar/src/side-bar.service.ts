import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IBarAction } from './../../footer-bar';
import { AppStore } from '../../app.state';
import { AppActions } from '../../app.actions';
import { BarAction } from '../../footer-bar';

@Injectable()
export class SideBarService {
  constructor(private store: Store<AppStore>) {
  }

  getActions = (): Observable<Array<IBarAction>> => this.store.select<IBarAction[]>('sideBarActions');

  setActions = (actions: IBarAction[]) => this.store.dispatch({
    type: AppActions.SET_SIDE_BAR_ACTIONS,
    payload: actions
  });

  getCurrentAction = (): Observable<IBarAction> => this.store.select<IBarAction>('sideBarCurrentAction');

  setCurrentAction = (action: IBarAction) => this.store.dispatch({
    type: AppActions.SET_CURRENT_ACTION,
    payload: action
  });

  setCurrentActionByName = (name: BarAction) => this.store.dispatch({
    type: AppActions.SET_CURRENT_ACTION_BY_NAME,
    payload: {
      actions: this.getActions(),
      name: name
    }
  });

  resetCurrentAction = () => this.store.dispatch({
    type: AppActions.SET_CURRENT_ACTION,
    payload: BarAction.NONE
  });
}

export const GUEST_ACTIONS = [{
  label: 'Home',
  link: '/home',
  icon: 'home'
}, {
  label: 'Sign In',
  name: BarAction.SIGN_IN,
  button: true,
  icon: 'account_circle'
}, {
  label: 'Sign Up',
  name: BarAction.SIGN_UP,
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
  name: BarAction.OPEN_PROFILE,
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
      name: BarAction.CREATE_ALBUM,
      icon: 'library_add'
    }
  ]
}, {
  label: 'Contact Us',
  link: '/user/contact',
  icon: 'mail'
}];
