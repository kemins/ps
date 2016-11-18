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
    })
}

export const GUEST_ACTIONS = [{
    label: 'Home',
    link: '/home',
    icon: 'home'
}, {
    label: 'Sign In',
    name: BAR_ACTION.SIGN_IN,
    link: '',
    icon: 'account_circle'
}, {
    label: 'Sign Up',
    name: BAR_ACTION.SIGN_UP,
    link: '',
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
    label: 'Contact Us',
    link: '/user/contact',
    icon: 'mail'
}];
