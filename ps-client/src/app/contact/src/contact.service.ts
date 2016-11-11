import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppActions } from '../../app.actions';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  constructor(private store: Store) {}

  sendMessage = () => {
    this.store.dispatch({
      type: AppActions.SEND_MESSAGE,
      payload: {
        contact: this.getDirtyContact(),
        token: this.getToken()
      }
    });
  };

  setToken = (token: string) => {
    this.store.dispatch({
      type: AppActions.SET_CONTACT_TOKEN,
      payload: token
    });
  };

  commitDirtyContact = () => {
    this.store.dispatch({
      type: AppActions.COMMIT_DIRTY_CONTACT,
      payload: this.getDirtyContact()
    });
  };

  setDirtyContact = (contact: Contact) => {
    this.store.dispatch({
      type: AppActions.SET_DIRTY_CONTACT,
      payload: contact
    });
  };

  getContact = (): Observable<Contact> => this.store.select('contact', 'value');
  getDirtyContact = (): Observable<Contact> => this.store.select('contact', 'dirtyValue');
  getToken = (): Observable<string> => this.store.select('contact', 'token');
}
