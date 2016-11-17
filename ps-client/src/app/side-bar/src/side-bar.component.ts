import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from '@angular/core';
import * as sideBarStyles from './side-bar.styl';
import { SocialLoginService, MODE } from '../../social-login';

@Component({
    selector: 'ps-side-bar',
    styles: [sideBarStyles],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-bar.html'
})
export class SideBarComponent implements OnInit {
    ngOnInit() {}

    ngAfterViewInit() {}

    @Output() actionDone = new EventEmitter();

    constructor(private socialLoginService: SocialLoginService) {}

    signIn() {
        this.authenticate(MODE.SIGN_IN);
    }

    signUp() {
        this.authenticate(MODE.SIGN_IN);
    }

    private authenticate(action: MODE) {
        this.socialLoginService.setMode(action);
        this.actionDone.emit(action);
    }
}
