import { Component, OnInit } from '@angular/core';
import { PushPopService } from './push-pop.service';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'ptt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ptt';

  constructor(public pushPopSrv: PushPopService) {}

  ngOnInit() {
    const timer = interval(500)
      .pipe(
        map(res => `return value: ${res}`),
        take(5)
      ).subscribe(next => console.log(next));
  }
}
