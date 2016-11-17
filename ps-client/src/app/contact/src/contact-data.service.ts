import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings, PsHttp, IPSResponse } from '../../core';
import { Contact } from './contact.model';


@Injectable()
export class ContactDataService {
    private contactUrl = AppSettings.getSetting('endpoint') + 'mail';

    constructor(private http: PsHttp) {}

    sendMessage(contact: Contact, token: string): Observable<IPSResponse> {
        return this.http.post(this.contactUrl, {contact: contact, token: token})
            .map(res => res.json());
    }
}