import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import * as sideBarStyles from './side-bar.styl';
import { Observable } from 'rxjs';
import { IBarAction } from '../../footer-bar/src/IBarAction';
import { SideBarService } from './SideBarService';

@Component({
  selector: 'ps-side-bar',
  styles: [sideBarStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-bar.html'
})
export class SideBarComponent {
  public actions: Observable<IBarAction[]>;

  @Output()
  public actionDone = new EventEmitter();

  public constructor(private sideBarService: SideBarService) {
    this.actions = sideBarService.getActions();
  }

  public doAction(action: IBarAction) {
    this.sideBarService.setCurrentAction(action);
    this.actionDone.emit(action);
  }
}
