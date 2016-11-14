import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BarAction } from './bar-action.model';

@Injectable()
export class FooterBarService {
    constructor(private store: Store) {}

    getActions = (): Observable<Array<BarAction>> => this.store.select('footerActions');
}
