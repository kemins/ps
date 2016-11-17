import { Component, OnInit } from '@angular/core';

import * as userBoardStyles from './user-board.styl';
import { FooterBarService } from '../../footer-bar';
import { USER_ACTIONS } from '../../footer-bar';

@Component({
  selector: 'user-board',
  styles: [userBoardStyles],
  templateUrl: 'user-board.html'
})
export class UserBoardComponent implements OnInit{
  constructor(private footerBarService: FooterBarService) {}

  ngOnInit() {
    this.footerBarService.setActions(USER_ACTIONS);
  }
}
