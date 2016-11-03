import { Component, Directive, Input, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';
import { ContactService } from "./contact.service";
import { SlideService } from "../slides/slides.service";
import { AppState } from "../app.service";
import { AppSettings } from "../core/app-settings";

import { EmailValidator } from '../validators/email-validator.directive';

@Component({
    selector: 'ps-contact-us',
    styles: [
        require('./contact.styl')
    ],
    providers: [ContactService],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact.html'
})
export class ContactComponent implements OnInit {
    contact: Observable<Contact>;
    token: Observable<string>;
    captchaKey = '';
    contactForm;

    @ViewChild('captcha')
    captcha;

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, EmailValidator.email])],
            message: ['', Validators.required]
        });

        this.contact.subscribe((contact: Contact) => this.contactForm.setValue(contact));
    }

    constructor(private contactService: ContactService, private appState: AppState, private formBuilder: FormBuilder) {
        this.captchaKey = AppSettings.getSetting('captcha.key');
        this.contact = contactService.getContact();
        this.token = contactService.getToken();
    }

    onSubmit() {
        this.contactService.setContact(this.contactForm.value);
        this.contactService.sendMessage();
        /*this.contactService.sendMessage(this.contactForm.value, this.token)
            .subscribe(data => {
                this.appState.showNotification(data);
                console.log(this.captcha);
                this.captcha.reset(this.captcha.widgetId);
            }, data => this.captcha.reset());*/
    }

    handleCorrectCaptcha(token) {
        this.contactService.setToken(token);
    }
}
