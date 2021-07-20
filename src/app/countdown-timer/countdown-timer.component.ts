import {Component, Input, OnInit} from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() countTime: number;
  @Input() isStop = true;

  constructor() {
  }

  ngOnInit() {
  }

  loading() {
    let interval = setInterval(() => {
      this.countTime = this.countTime - 1;
      if ((this.countTime === 0) || (this.isStop === false)) {
        clearInterval(interval);
      }
    }, 1000);
  }

  stop() {
    this.isStop = false;
  }

  reset(numbers: number) {
    this.countTime = numbers;
  }
}
