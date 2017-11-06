import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as guestBoardStyles from './guest-board.styl';
import { FooterBarService, GUEST_ACTIONS as FOOTER_ACTIONS, IBarAction, BarAction } from '../../footer-bar';
import { MODE, SocialLoginService } from '../../social-login';
import { SideBarService, GUEST_ACTIONS as SIDE_BAR_ACTIONS } from '../../side-bar';

@Component({
  selector: 'guest-board',
  styles: [guestBoardStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'guest-board.html'
})
export class GuestBoardComponent implements OnInit {
  constructor(private footerBarService: FooterBarService,
              private socialLoginService: SocialLoginService,
              private sideBarService: SideBarService) {
  }

  ngOnInit() {
    this.footerBarService.setActions(FOOTER_ACTIONS);
    this.sideBarService.setActions(SIDE_BAR_ACTIONS);
  }

  openSignUp() {
    this.socialLoginService.setMode(MODE.SIGN_UP);
  }

  openSignIn() {
    this.socialLoginService.setMode(MODE.SIGN_IN);
  }

  doAction(action: IBarAction) {
    switch (action.name) {
      case BarAction.SIGN_IN:
        this.openSignIn();
        break;

      case BarAction.SIGN_UP:
        this.openSignUp();
        break;
    }
  }
}
