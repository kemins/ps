import { Component, OnInit } from '@angular/core';
import * as userBoardStyles from './user-board.styl';
import {
    FooterBarService,
    USER_ACTIONS as FOOTER_ACTIONS,
    BarAction,
    BAR_ACTION
} from '../../footer-bar';
import {
    SideBarService,
    USER_ACTIONS as SIDE_BAR_ACTIONS
} from '../../side-bar';
import { Profile, ProfileService } from '../../profile';
import { Observable } from 'rxjs';

@Component({
    selector: 'user-board',
    styles: [userBoardStyles],
    templateUrl: 'user-board.html'
})
export class UserBoardComponent implements OnInit {
    profile: Observable<Profile>;
    currentAction: Observable<BarAction>;

    constructor(private footerBarService: FooterBarService,
                private sideBarService: SideBarService,
                private profileService: ProfileService) {
        this.profile = profileService.getProfile();
        this.currentAction = sideBarService.getCurrentAction();
    }

    ngOnInit() {
        this.footerBarService.setActions(FOOTER_ACTIONS);
        this.sideBarService.setActions(SIDE_BAR_ACTIONS);
    }

    doAction(action: BarAction) {
        switch (action.name) {
            case BAR_ACTION.OPEN_PROFILE:
                break;
        }
    }

    menuClose() {
        this.sideBarService.resetCurrentAction();
    }

    openProfile() {
        this.sideBarService.setCurrentActionByName(BAR_ACTION.OPEN_PROFILE);
    }

    logout() {
        this.profileService.logout();
    }

    profileAction = (action: BarAction): boolean => action && action.name === BAR_ACTION.OPEN_PROFILE;
}
