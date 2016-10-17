import { Component, Input, ViewChild  } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from "./contact.service";
import { SlideService } from "../slides/slides.service";
import { AppState } from "../app.service";
import { AppSettings } from "../core/app-settings";

@Component({
    selector: 'ps-contact-us',
    styles: [
        require('./contact.styl')
    ],
    providers: [ContactService],
    templateUrl: './contact.html'
})
export class ContactComponent {
    contact = new Contact('Andrew', '', 'a@k.ua');
    captchaKey = '';
    token = '';

    @ViewChild('captcha')
    captcha;

    constructor(private contactService: ContactService, private appState: AppState) {
        this.captchaKey = AppSettings.getSetting('captcha.key');
    }

    onSubmit() {
        this.contactService.sendMessage(this.contact, this.token)
            .subscribe(data => {
                this.appState.showNotification(data);
                console.log(this.captcha);
                this.captcha.reset(this.captcha.widgetId);
            }, data => this.captcha.reset());
    }

    handleCorrectCaptcha(token) {
        this.token = token;
    }
}
