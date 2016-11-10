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
        contact: this.getContact(),
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

  setContact = (contact: Contact) => {
    this.store.dispatch({
      type: AppActions.SET_CONTACT,
      payload: contact
    });
  };

  getContact = (): Observable<Contact> => this.store.select('contact', 'value');
  getToken = (): Observable<string> => this.store.select('contact', 'token');
}
