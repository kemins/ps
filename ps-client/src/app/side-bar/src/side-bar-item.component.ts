import {
  Component,
  EventEmitter,
  Input, Output
} from '@angular/core';
import { BarAction } from '../../footer-bar';

@Component({
  selector: 'ps-side-bar-item',
  templateUrl: './side-bar-item.html'
})
export class SideBarItemComponent {
  @Input()
  public action: BarAction;

  @Output()
  public actionDone: EventEmitter<BarAction> = new EventEmitter<BarAction>();

  public doAction(action) {
    if (action.button) {
      this.actionDone.emit(action);
    }
  }
}
