import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { PsHttp } from '../../core';

@Injectable()
export class SocialLoginDataService {
  public constructor(private http: PsHttp) {
  }

  public signIn({callback_uri, connection}) {
    return this.authenticate(callback_uri, connection, 'login');
  }

  public signUp({callback_uri, connection}) {
    return this.authenticate(callback_uri, connection, 'register');
  }

  public authenticate(url: string, data: any, action: string) {
    return this.http.post(url, _.extend(data, {action}))
      .map((response: Response) => response.json());
  }
}