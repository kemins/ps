import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IBarAction } from './IBarAction';
import { IAppStore } from '../../IAppState';
import { AppActions } from '../../AppActions';

@Injectable()
export class FooterBarService {
  public constructor(private store: Store<IAppStore>) {
  }

  public getActions(): Observable<Array<IBarAction>> {
    return this.store.select<IBarAction[]>('footerActions');
  }

  public setActions(actions: IBarAction[]): void {
    this.store.dispatch({
      type: AppActions.SET_FOOTER_ACTIONS,
      payload: actions
    })
  }
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
  link: 'user/contact'
}];

