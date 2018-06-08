import { Component, ViewChild } from '@angular/core';
import {NgRangeCalendarComponent} from './modules/ng-range-calendar/ng-range-calendar.component';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NgRangeCalendarComponent) rangDate;
  minDate = moment();
  nextDate = moment().day(7);
  dateChange(e) {
    console.log({
        'begin': e.value.begin,
        'end': e.value.end,
    });
  }

  open() {
    this.rangDate.open();
  }

  reset() {
      this.rangDate.reset();
  }

  showSelected() {
    console.log({
        'begin': this.rangDate.beginDate,
        'end': this.rangDate.endDate,
    });
  }
}
