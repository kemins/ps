import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as _ from 'lodash';
import { PsHttp } from '../../core';

@Injectable()
export class SocialLoginDataService {
    constructor(private http: PsHttp) {}

    signIn = ({callback_uri, connection}) => this.authenticate(callback_uri, connection, 'login');

    signUp = ({callback_uri, connection}) => this.authenticate(callback_uri, connection, 'register');

    authenticate = (url: string, data: any, action: string) => {
        return this.http.post(url, _.extend(data, {action}))
            .map((response: Response) => response.json());
    }
}