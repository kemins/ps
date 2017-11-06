import {
  Component,
  EventEmitter,
  Input, Output
} from '@angular/core';
import { IBarAction } from '../../footer-bar';

@Component({
  selector: 'ps-side-bar-item',
  templateUrl: './side-bar-item.html'
})
export class SideBarItemComponent {
  @Input()
  public action: IBarAction;

  @Output()
  public actionDone: EventEmitter<IBarAction> = new EventEmitter<IBarAction>();

  public doAction(action) {
    if (action.button) {
      this.actionDone.emit(action);
    }
  }
}
