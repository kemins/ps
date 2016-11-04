import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { ContactDataService } from './contact-data.service';
import { AppActions } from '../app.actions';


@Injectable()
export class ContactEffectService implements OnDestroy {
    types = {
        success: AppActions.MESSAGE_POST_SUCCESS,
        fault: AppActions.MESSAGE_POST_FAIL
    };

    constructor(private contactDataService: ContactDataService, private actions$: Actions) {}

    @Effect() sendContact$: Observable<Action> = this.actions$
        .ofType(AppActions.SEND_MESSAGE)
        .flatMap(({payload}) => payload.contact.combineLatest(payload.token).take(1))
        .flatMap(([contact, token]) => this.contactDataService.sendMessage(contact, token))
        .map(res => ({type: this.types[res.type], payload: res}));


    ngOnDestroy = () => {};
}