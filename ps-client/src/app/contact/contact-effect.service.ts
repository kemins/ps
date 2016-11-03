import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { ContactDataService } from './contact-data.service';
import { AppActions } from '../app.actions';


@Injectable()
export class ContactEffectService implements OnDestroy {
    constructor(private contactDataService: ContactDataService, private actions$: Actions) {}

    @Effect() sendContact$: Observable<Action> = this.actions$
        .ofType(AppActions.SEND_MESSAGE)
        .switchMap(({payload}) => payload.contact.combineLatest(payload.token).take(1))
        .switchMap(([contact, token]) => this.contactDataService.sendMessage(contact, token))
        .map(res => {
            const type = res.type === 'success' ?
                AppActions.MESSAGE_SEND_SUCCESS :
                AppActions.MESSAGE_SEND_FAIL;
            return {type: type, payload: res}
        });


    ngOnDestroy = () => {};
}