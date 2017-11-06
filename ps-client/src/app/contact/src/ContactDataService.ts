import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings, IPSResponse, HttpService } from '../../core';
import { IContact } from './IContact';


@Injectable()
export class ContactDataService {
  private contactUrl = AppSettings.getSetting('endpoint') + 'mail';

  public constructor(private http: HttpService) {
  }

  public sendMessage(contact: IContact, token: string): Observable<IPSResponse> {
    return this.http.post(this.contactUrl, {contact: contact, token: token})
      .map(res => res.json());
  }
}