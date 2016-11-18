import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from '@angular/core';
import * as sideBarStyles from './side-bar.styl';
import { SocialLoginService, MODE } from '../../social-login';
import { Observable } from 'rxjs';
import { BarAction } from '../../footer-bar/src/bar-action.model';
import { SideBarService } from './side-bar.service';

@Component({
    selector: 'ps-side-bar',
    styles: [sideBarStyles],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-bar.html'
})
export class SideBarComponent implements OnInit {
    actions: Observable<BarAction[]>;

    ngOnInit() {
    }

    @Output() actionDone = new EventEmitter();

    constructor(private socialLoginService: SocialLoginService,
                private sideBarService: SideBarService) {
        this.actions = sideBarService.getActions();
    }

    signIn() {
        this.authenticate(MODE.SIGN_IN);
    }

    signUp() {
        this.authenticate(MODE.SIGN_IN);
    }

    doAction(action: BarAction) {
        this.actionDone.emit(action);
    }

    private authenticate(action: MODE) {
        this.socialLoginService.setMode(action);
        this.actionDone.emit(action);
    }
}
