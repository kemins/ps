import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { ContactDataService } from './../';
import { AppActions } from '../../AppActions';
import { IPSResponse } from '../../core';
import { ContactService } from './ContactService';
import { IPayloadAction } from '../../core/src/IPayloadAction';

@Injectable()
export class ContactEffectService {
  private types = {
    success: AppActions.MESSAGE_POST_SUCCESS,
    fault: AppActions.MESSAGE_POST_FAIL
  };

  public constructor(private contactDataService: ContactDataService,
                     private contactService: ContactService,
                     private actions$: Actions<IPayloadAction<any>>) {
  }

  @Effect()
  public sendContact$: Observable<IPayloadAction> = this.actions$
    .ofType(AppActions.SEND_MESSAGE)
    .switchMap(({payload}) => payload.contact.combineLatest(payload.token).first())
    .switchMap(([contact, token]) => this.contactDataService.sendMessage(contact, token))
    .map((res: IPSResponse) => ({
      type: this.types[res.type],
      payload: res
    }));


  @Effect()
  public commitDirtyContact$: Observable<IPayloadAction> = this.actions$
    .ofType(AppActions.COMMIT_DIRTY_CONTACT)
    .switchMap(({payload}) => payload.first())
    .map((dirtyContact) => ({
      type: AppActions.SET_CONTACT,
      payload: dirtyContact
    }));

  @Effect()
  public profileChange$: Observable<IPayloadAction> = this.actions$
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