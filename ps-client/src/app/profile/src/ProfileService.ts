import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppActions } from '../../AppActions';
import { IProfile } from './IProfile';
import { IAppStore } from '../../IAppState';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';

@Injectable()
export class ProfileService implements CanActivate {
  public constructor(private store: Store<IAppStore>,
                     private router: Router) {
  }

  public save(): void {
    this.store.dispatch({
      type: AppActions.SAVE_PROFILE
    });
  }

  public setDirtyProfile(profile: IProfile): void {
    this.store.dispatch({
      type: AppActions.SET_DIRTY_PROFILE,
      payload: profile
    });
  }

  public setDirtyAvatar(data): void {
    this.store.dispatch({
      type: AppActions.SET_DIRTY_AVATAR,
      payload: data
    });
  }

  public resetAvatar(): void {
    this.store.dispatch({
      type: AppActions.RESET_AVATAR
    });
  }

  public uploadAvatar(): void {
    this.store.dispatch({
      type: AppActions.UPLOAD_AVATAR
    });
  }

  public getProfile(): Observable<IProfile> {
    return this.store.select<IProfile>('profile', 'value');
  }

  public getDirtyProfile(): Observable<IProfile> {
    return this.store.select<IProfile>('profile', 'dirtyValue');
    ;
  }

  public getAvatar(): Observable<any> {
    return this.store.select<any>('profile', 'avatar');
  }

  public getDirtyAvatar(): Observable<any> {
    return this.store.select<any>('profile', 'dirtyAvatar');
  }

  public logout(): void {
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
