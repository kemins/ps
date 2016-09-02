import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
    selector: 'ps-contact-us',
    styles: [
        require('./contact.styl')
    ],
    templateUrl: './contact.html'
})
export class ContactComponent {
    contact = new Contact('Andrew', 'm', 'e');

    onSubmit() {

    }
}