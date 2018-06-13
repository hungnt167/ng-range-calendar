import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgRangeCalendarModule } from './modules/ng-range-calendar/ng-range-calendar.module';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FormsModule} from '@angular/forms';

export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      FormsModule,
    BrowserModule,
    NgRangeCalendarModule,
  ],
  providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
      // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
