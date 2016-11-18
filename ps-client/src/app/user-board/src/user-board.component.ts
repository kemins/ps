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

@Component({
  selector: 'user-board',
  styles: [userBoardStyles],
  templateUrl: 'user-board.html'
})
export class UserBoardComponent implements OnInit{
  constructor(private footerBarService: FooterBarService,
              private sideBarService: SideBarService) {}

  ngOnInit() {
    this.footerBarService.setActions(FOOTER_ACTIONS);
    this.sideBarService.setActions(SIDE_BAR_ACTIONS);
  }
}
