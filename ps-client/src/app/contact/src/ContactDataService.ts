import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings, IPSResponse, PsHttp } from '../../core';
import { IContact } from './IContact';


@Injectable()
export class ContactDataService {
  private contactUrl = AppSettings.getSetting('endpoint') + 'mail';

  public constructor(private http: PsHttp) {
  }

  public sendMessage(contact: IContact, token: string): Observable<IPSResponse> {
    return this.http.post(this.contactUrl, {contact: contact, token: token})
      .map(res => res.json());
  }
}