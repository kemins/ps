import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppActions } from '../../AppActions';
import { IAppStore } from '../../IAppState';
import { IContact } from './IContact';

@Injectable()
export class ContactService {
  constructor(private store: Store<IAppStore>) {
  }

  public sendMessage(): void {
    this.store.dispatch({
      type: AppActions.SEND_MESSAGE,
      payload: {
        contact: this.getContact(),
        token: this.getToken()
      }
    });
  }

  public setToken(token: string): void {
    this.store.dispatch({
      type: AppActions.SET_CONTACT_TOKEN,
      payload: token
    });
  }

  public commitDirtyContact(): void {
    this.store.dispatch({
      type: AppActions.COMMIT_DIRTY_CONTACT,
      payload: this.getDirtyContact()
    });
  }

  public setDirtyContact(contact: IContact): void {
    this.store.dispatch({
      type: AppActions.SET_DIRTY_CONTACT,
      payload: contact
    });
  }

  public getContact(): Observable<IContact> {
    return this.store.select<IContact>('contact', 'value');
  }

  public getDirtyContact(): Observable<IContact> {
    return this.store.select<IContact>('contact', 'dirtyValue');
  }

  public getToken(): Observable<string> {
    return this.store.select<string>('contact', 'token');
  }
}
