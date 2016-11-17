import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BarAction } from './bar-action.model';
import { AppStore } from '../../app.state';
import { AppActions } from '../../app.actions';

@Injectable()
export class FooterBarService {
    constructor(private store: Store<AppStore>) {}

    getActions = (): Observable<Array<BarAction>> => this.store.select<BarAction[]>('footerActions');

    setActions = (actions: BarAction[]) => this.store.dispatch({
        type: AppActions.SET_FOOTER_ACTIONS,
        payload: actions
    })
}

export const GUEST_ACTIONS = [{
    label: 'Home',
    link: '/home'
}, {
    label: 'Contact us',
    link: '/contact'
}];

export const USER_ACTIONS = [{
    label: 'Contact us',
    link: '/contact'
}];
