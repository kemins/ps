import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppActions } from '../../app.actions';
import { Profile } from './profile.model';
import { AppStore } from '../../app.state';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, Router
} from '@angular/router';

@Injectable()
export class ProfileService implements CanActivate{
    constructor(private store: Store<AppStore>, private router: Router) {
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

    logout = () => {
        this.store.dispatch({
            type: AppActions.LOGOUT
        });
    };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.getProfile()
            .first()
            .do((profile) => {
                if (!profile.active) {
                    this.router.navigate(['/']);
                }
            })
            .map(profile => profile.active) as Observable<boolean>;
    }
}
