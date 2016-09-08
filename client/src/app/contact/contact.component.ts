import { Component, Input } from '@angular/core';
import { Contact } from './contact';

@Component({
    selector: 'ps-contact-us',
    styles: [
        require('./contact.styl')
    ],
    templateUrl: './contact.html'
})
export class ContactComponent {
    title = 'Hey';

    contact = new Contact('Andrew', '', 'a@k.ua');
    name2 = 'Test';

    onSubmit() {
        console.log('Submitted!');
    }
}