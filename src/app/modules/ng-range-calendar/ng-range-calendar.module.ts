import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRangeCalendarComponent } from './ng-range-calendar.component';
import {SatDatepickerModule} from '../datepicker';
import {SatNativeDateModule} from '../datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SatDatepickerModule,
    SatNativeDateModule
  ],
  declarations: [NgRangeCalendarComponent],
  exports: [
      NgRangeCalendarComponent
  ]
})
export class NgRangeCalendarModule { }
