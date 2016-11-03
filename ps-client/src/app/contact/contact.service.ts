import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';
import { AppActions } from "../app.actions";

@Injectable()
export class ContactService {
  constructor(private store: Store) {}

  sendMessage = () => {
    this.getContact()
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

  getContact = (): Observable<Contact> => this.store.select('contact').select('value');
  getToken = (): Observable<string> => this.store.select('contact').select('token');
}