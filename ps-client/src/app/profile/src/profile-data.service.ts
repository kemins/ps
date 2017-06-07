import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { AppSettings, PsHttp } from '../../core';
import { Profile } from './profile.model';
import { Headers } from 'ng2-file-upload';

@Injectable()
export class ProfileDataService {
    private profileUrl = AppSettings.getSetting('endpoint') + 'profile';
    private avatarUrl = AppSettings.getSetting('endpoint') + 'profile/avatar';

    public constructor(private http: PsHttp) {
    }

    public save(profile: Profile) {
        return this.http.post(this.profileUrl, profile)
            .map((response: Response) => response.json());
    }

    public uploadAvatar(data) {
        /*const headers = new Headers({'Content-Type': 'multipart/form-data'});
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.avatarUrl, data)
          .map((response: Response) => response.json());*/
    }
}