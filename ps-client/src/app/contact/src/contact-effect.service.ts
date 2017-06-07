import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ContactDataService } from './../';
import { AppActions } from '../../app.actions';
import { IPSResponse } from '../../core/src/ps-response';


@Injectable()
export class ContactEffectService implements OnDestroy {
    types = {
        success: AppActions.MESSAGE_POST_SUCCESS,
        fault: AppActions.MESSAGE_POST_FAIL
    };

    constructor(private contactDataService: ContactDataService, private actions$: Actions) {
    }

    @Effect() sendContact$: Observable<Action> = this.actions$
        .ofType(AppActions.SEND_MESSAGE)
        .switchMap(({payload}) => payload.contact.combineLatest(payload.token).first())
        .switchMap(([contact, token]) => this.contactDataService.sendMessage(contact, token))
        .map((res: IPSResponse) => ({
            type: this.types[res.type],
            payload: res
        }));


    @Effect() commitDirtyContact$: Observable<Action> = this.actions$
        .ofType(AppActions.COMMIT_DIRTY_CONTACT)
        .switchMap(({payload}) => payload.first())
        .map((dirtyContact) => ({
            type: AppActions.SET_CONTACT,
            payload: dirtyContact
        }));


    ngOnDestroy = () => {};
}