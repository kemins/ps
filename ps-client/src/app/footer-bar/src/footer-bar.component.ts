import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as footerStyles from './footer.styl';
import { BarAction } from './bar-action.model';
import { Observable } from 'rxjs';
import { FooterBarService } from './footer-bar.service';

@Component({
    selector: 'ps-footer',
    styles: [footerStyles],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer-bar.html'
})
export class FooterComponent implements OnInit {
    actions: Observable<Array<BarAction>>;

    ngOnInit() {}

    ngAfterViewInit() {}

    constructor(private footerBarService: FooterBarService) {
        this.actions = footerBarService.getActions();
    }
}
