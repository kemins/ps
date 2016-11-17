import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AppSettings, PsHttp } from '../../core';
import { Profile } from './profile.model';

@Injectable()
export class ProfileDataService {
    private profileUrl = AppSettings.getSetting('endpoint') + 'profile';

    constructor(private http: PsHttp) {
    }

    save(profile: Profile) {
        return this.http.post(this.profileUrl, profile)
            .map((response: Response) => response.json());
    }
}