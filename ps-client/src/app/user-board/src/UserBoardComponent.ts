import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as userBoardStyles from './user-board.styl';
import {
  FooterBarService,
  USER_ACTIONS as FOOTER_ACTIONS,
  IBarAction,
  BarAction
} from '../../footer-bar';
import {
  SideBarService,
  USER_ACTIONS as SIDE_BarActionS
} from '../../side-bar';
import { IProfile, ProfileService } from '../../profile';
import { Observable } from 'rxjs';
import { MdDialog } from '@angular/material';
import { AlbumService, CreateAlbumComponent } from '../../albums';

@Component({
  selector: 'user-board',
  styles: [userBoardStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'user-board.html'
})
export class UserBoardComponent implements OnInit {
  private profile: Observable<IProfile>;
  private currentAction: Observable<IBarAction>;

  public constructor(private footerBarService: FooterBarService,
                      private sideBarService: SideBarService,
                      private profileService: ProfileService,
                      private albumService: AlbumService,
                      private dialog: MdDialog) {
    this.profile = profileService.getProfile();
    this.currentAction = sideBarService.getCurrentAction();
  }

  public ngOnInit(): void {
    this.footerBarService.setActions(FOOTER_ACTIONS);
    this.sideBarService.setActions(SIDE_BarActionS);
  }

  public doAction(action: IBarAction): void {
    switch (action.name) {
      case BarAction.OPEN_PROFILE:
        break;
      case BarAction.CREATE_ALBUM:
        this.albumService.albumDialog = this.dialog.open<CreateAlbumComponent>(CreateAlbumComponent, {
          width: '400px'
        });

        break;
    }
  }

  public menuClose(): void {
    this.sideBarService.resetCurrentAction();
  }

  public openProfile(): void {
    this.sideBarService.setCurrentActionByName(BarAction.OPEN_PROFILE);
  }

  public logout(): void {
    this.profileService.logout();
  }

  public profileAction(action: IBarAction): boolean {
    return action && action.name === BarAction.OPEN_PROFILE;
  }
}
