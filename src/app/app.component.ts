import { Component } from '@angular/core';
import { PushPopService } from './push-pop.service';

@Component({
  selector: 'ptt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ptt';

  constructor(public pushPopSrv: PushPopService) {}
}
