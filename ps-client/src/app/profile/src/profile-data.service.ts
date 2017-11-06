import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { AppSettings, HttpService } from '../../core';
import { Profile } from './profile.model';
import { Headers } from 'ng2-file-upload';

@Injectable()
export class ProfileDataService {
  private profileUrl = AppSettings.getSetting('endpoint') + 'profile';
  private avatarUrl = AppSettings.getSetting('endpoint') + 'profile/avatar';
  private logoutUrl = AppSettings.getSetting('endpoint') + 'profile/logout';

  public constructor(private http: HttpService) {
  }

  public save(profile: Profile) {
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
