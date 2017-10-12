import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ContactDataService } from './../';
import { AppActions } from '../../app.actions';
import { IPSResponse } from '../../core/src/ps-response';
import { ContactService } from './contact.service';


@Injectable()
export class ContactEffectService {
  private types = {
    success: AppActions.MESSAGE_POST_SUCCESS,
    fault: AppActions.MESSAGE_POST_FAIL
  };

  public constructor(private contactDataService: ContactDataService,
                     private contactService: ContactService,
                     private actions$: Actions) {
  }

  @Effect()
  public sendContact$: Observable<Action> = this.actions$
    .ofType(AppActions.SEND_MESSAGE)
    .switchMap(({payload}) => payload.contact.combineLatest(payload.token).first())
    .switchMap(([contact, token]) => this.contactDataService.sendMessage(contact, token))
    .map((res: IPSResponse) => ({
      type: this.types[res.type],
      payload: res
    }));


  @Effect()
  public commitDirtyContact$: Observable<Action> = this.actions$
    .ofType(AppActions.COMMIT_DIRTY_CONTACT)
    .switchMap(({payload}) => payload.first())
    .map((dirtyContact) => ({
      type: AppActions.SET_CONTACT,
      payload: dirtyContact
    }));

  @Effect()
  public profileChange$: Observable<Action> = this.actions$
    .ofType(AppActions.SET_PROFILE)
    .withLatestFrom(this.contactService.getContact())
    .map(([{payload}, profile]) => {
      const patch = {email: payload.email};

      return {
        type: AppActions.SET_DIRTY_CONTACT,
        payload: {...profile, ...patch}
      };
    });
}