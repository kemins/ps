import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppActions } from '../../app.actions';
import { Contact } from './contact.model';
import { AppStore } from '../../app.state';

@Injectable()
export class ContactService {
  constructor(private store: Store<AppStore>) {}

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

  getContact = (): Observable<Contact> => this.store.select<Contact>('contact', 'value');
  getDirtyContact = (): Observable<Contact> => this.store.select<Contact>('contact', 'dirtyValue');
  getToken = (): Observable<string> => this.store.select<string>('contact', 'token');
}
