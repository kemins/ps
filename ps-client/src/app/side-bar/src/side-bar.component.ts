import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import * as sideBarStyles from './side-bar.styl';
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
  public actions: Observable<BarAction[]>;

  public ngOnInit() {
  }

  @Output()
  public actionDone = new EventEmitter();

  public constructor(private sideBarService: SideBarService) {
    this.actions = sideBarService.getActions();
  }

  public doAction(action: BarAction) {
    this.sideBarService.setCurrentAction(action);
    this.actionDone.emit(action);
  }
}
