import { Injectable, OnDestroy, Type } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ContactDataService } from './../';
import { AppActions } from '../../app.actions';


@Injectable()
export class ContactEffectService extends Type  implements OnDestroy{
    types = {
        success: AppActions.MESSAGE_POST_SUCCESS,
        fault: AppActions.MESSAGE_POST_FAIL
    };

    constructor(private contactDataService: ContactDataService, private actions$: Actions) {}

    @Effect() sendContact$: Observable<Action> = this.actions$
        .ofType(AppActions.SEND_MESSAGE)
        .mergeMap(({payload}) => payload.contact.combineLatest(payload.token).first())
        .mergeMap(([contact, token]) => this.contactDataService.sendMessage(contact, token))
        .map(res => ({type: this.types[res.type], payload: res}));


    @Effect() commitDirtyContact$: Observable<Action> = this.actions$
        .ofType(AppActions.COMMIT_DIRTY_CONTACT)
        .map(item => {console.log(item);return item;})
        .mergeMap(({payload}) => payload.first())
        .map(item => {console.log(item);return item;})
        .map((dirtyContact) => ({type: AppActions.SET_CONTACT, payload: dirtyContact}));


    ngOnDestroy = () => {};
}