import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgRangeCalendarModule } from './modules/ng-range-calendar/ng-range-calendar.module';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRangeCalendarModule,
  ],
  providers: [
      {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
