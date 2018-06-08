import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {SatDatepicker, SatDatepickerInputEvent, SatDatepickerRangeValue} from '../datepicker';

export interface D extends Object {} //tslint:disable-line

@Component({
    selector: 'ng-range-calendar',
    templateUrl: './ng-range-calendar.component.html',
    styleUrls: ['./ng-range-calendar.component.css']
})
export class NgRangeCalendarComponent {
    @ViewChild(SatDatepicker) datePicker;
    /** Beginning of date range. */
    @Input() beginDate: D | null;
    /** Date range end. */
    @Input() endDate: D | null;

    /** The date to open the calendar to initially. */
    @Input() startAt: D | null;

    /** The view that the calendar should start in. */
    @Input() startView: 'month' | 'year' = 'month';

    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    @Input() touchUi = false;

    /** Whether the datepicker pop-up should be disabled. */
    @Input() disabled: boolean;

    /**
     * Emits new selected date when selected date changes.
     * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
     * @deletion-target 6.0.0
     */
    @Output() readonly selectedChanged: EventEmitter<D|SatDatepickerRangeValue<D>> =
        new EventEmitter<D|SatDatepickerRangeValue<D>>();

    /**
     * Emits selected year in multiyear view.
     * This doesn't imply a change on the selected date.
     */
    @Output() readonly yearSelected: EventEmitter<D> = new EventEmitter<D>();

    /**
     * Emits selected month in year view.
     * This doesn't imply a change on the selected date.
     */
    @Output() readonly monthSelected: EventEmitter<D> = new EventEmitter<D>();

    /** Classes to be passed to the date picker panel. Supports the same syntax as `ngClass`. */
    @Input() panelClass: string | string[];
    /** Whether the calendar is open. */
    @Input() opened: boolean;
    /** Whether the calendar is transparent. */
    @Input() isTransparent: boolean;

    /**
     * =====================================================================================================================================
     *  Input props
     */
    /** The minimum valid date. */
    @Input() min: D | null;

    /** The maximum valid date. */
    @Input() max: D | null;
    /**
     *  Emits when a `change` event is fired on this `<input>`
     */
    @Output() readonly rangeChange: EventEmitter<SatDatepickerInputEvent<D>> =
        new EventEmitter<SatDatepickerInputEvent<D>>();

    /**
     *  Reset all
     */
    reset() {
        this.beginDate = this.endDate =  this.startAt = null;
    }
    /**
     *  Trigger open
     */
    open() {
        this.datePicker.open();
    }

    /**
     * Change date event
     * @param {SatDatepickerInputEvent} $event
     */
    dateChange($event) {
        this.beginDate = this.datePicker.beginDate;
        this.endDate = this.datePicker.endDate;
        this.rangeChange.emit($event);
    }

}
