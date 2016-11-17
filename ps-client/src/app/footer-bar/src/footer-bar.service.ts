import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BarAction } from './bar-action.model';
import { AppStore } from '../../app.state';

@Injectable()
export class FooterBarService {
    constructor(private store: Store<AppStore>) {}

    getActions = (): Observable<Array<BarAction>> => this.store.select<BarAction[]>('footerActions');
}
