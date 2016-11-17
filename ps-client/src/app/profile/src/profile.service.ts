import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppActions } from '../../app.actions';
import { Profile } from './profile.model';
import { AppStore } from '../../app.state';

@Injectable()
export class ProfileService {
    constructor(private store: Store<AppStore>) {
    }

    commitDirtyProfile = () => {
        this.store.dispatch({
            type: AppActions.COMMIT_DIRTY_PROFILE,
            payload: this.getDirtyProfile()
        });
    };

    setDirtyProfile = (contact: Profile) => {
        this.store.dispatch({
            type: AppActions.SET_DIRTY_PROFILE,
            payload: contact
        });
    };

    getProfile = (): Observable<Profile> => this.store.select<Profile>('profile', 'value');
    getDirtyProfile = (): Observable<Profile> => this.store.select<Profile>('profile', 'dirtyValue');
}
