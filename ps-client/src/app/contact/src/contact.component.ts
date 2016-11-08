import {
    Component,
    ViewChild,
    OnInit,
    ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmailValidator } from '../../validators';
import { AppSettings } from '../../core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
    selector: 'ps-contact-us',
    styles: [
        require('./contact.styl')
    ],
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

    constructor(private contactService: ContactService, private formBuilder: FormBuilder) {
        this.captchaKey = AppSettings.getSetting('captcha.key');
        this.contact = contactService.getContact();
        this.token = contactService.getToken();
    }

    onSubmit() {
        this.contactService.setContact(this.contactForm.value);
        this.contactService.sendMessage();
    }

    handleCorrectCaptcha(token) {
        this.contactService.setToken(token);
    }
}
