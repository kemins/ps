import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from "./contact";
import { PsHttp } from "../core/ps-http.service";


@Injectable()
export class ContactService {
    private contactUrl = 'http://localhost:7000/mail';

    constructor(private http: PsHttp) {}

    sendMessage(contact: Contact, token: string): Observable {
        return this.http.post(this.contactUrl, {contact: contact, token: token})
            .map(this.extractData);
    }

    private extractData(res: Response): Contact {
       return res.json().success;
    }
}