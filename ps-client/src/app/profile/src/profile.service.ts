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
export class ProfileService implements CanActivate {
  public constructor(private store: Store<AppStore>,
                     private router: Router) {
  }

  public commitDirtyProfile() {
    this.store.dispatch({
      type: AppActions.COMMIT_DIRTY_PROFILE,
      payload: this.getDirtyProfile()
    });
  }

  public setDirtyProfile(profile: Profile) {
    this.store.dispatch({
      type: AppActions.SET_DIRTY_PROFILE,
      payload: profile
    });
  }

  public setAvatar(data) {
    this.store.dispatch({
      type: AppActions.SET_AVATAR,
      payload: data
    });
  }

  public resetAvatar() {
    this.store.dispatch({
      type: AppActions.RESET_AVATAR
    });
  }

  public uploadAvatar() {
    this.store.dispatch({
      type: AppActions.UPLOAD_AVATAR
    });
  }

  public getProfile = (): Observable<Profile> => this.store.select<Profile>('profile', 'value');
  public getDirtyProfile = (): Observable<Profile> => this.store.select<Profile>('profile', 'dirtyValue');
  public getAvatar = (): Observable<any> => this.store.select<any>('profile', 'avatar');

  public logout() {
    this.store.dispatch({
      type: AppActions.LOGOUT
    });
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
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
