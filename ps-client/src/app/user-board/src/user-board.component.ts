import { Component, OnInit } from '@angular/core';
import * as userBoardStyles from './user-board.styl';
import {
    FooterBarService,
    USER_ACTIONS as FOOTER_ACTIONS
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

    constructor(private footerBarService: FooterBarService,
                private sideBarService: SideBarService,
                private profileService: ProfileService) {
        this.profile = profileService.getProfile();
    }

    ngOnInit() {
        this.footerBarService.setActions(FOOTER_ACTIONS);
        this.sideBarService.setActions(SIDE_BAR_ACTIONS);
    }
}
