import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as footerStyles from './footer.styl';
import { IBarAction } from './IBarAction';
import { Observable } from 'rxjs';
import { FooterBarService } from './FooterBarService';

@Component({
  selector: 'ps-footer',
  styles: [footerStyles],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer-bar.html'
})
export class FooterComponent {
  private actions: Observable<Array<IBarAction>>;

  public constructor(private footerBarService: FooterBarService) {
    this.actions = footerBarService.getActions();
  }
}
