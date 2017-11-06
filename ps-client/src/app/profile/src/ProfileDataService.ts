import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AppSettings, HttpService } from '../../core';
import { IProfile } from './IProfile';

@Injectable()
export class ProfileDataService {
  private profileUrl = AppSettings.getSetting('endpoint') + 'profile';
  private avatarUrl = AppSettings.getSetting('endpoint') + 'profile/avatar';
  private logoutUrl = AppSettings.getSetting('endpoint') + 'profile/logout';

  public constructor(private http: HttpService) {
  }

  public save(profile: IProfile) {
    return this.http.post(this.profileUrl, {profile})
      .map((response: Response) => response.json());
  }

  public uploadAvatar(avatar) {
    return this.http.post(this.avatarUrl, {avatar})
      .map((response: Response) => response.json());
  }

  public logout() {
    return this.http.get(this.logoutUrl)
      .map((response: Response) => response.json());
  }
}
