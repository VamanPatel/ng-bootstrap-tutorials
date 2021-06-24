import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct;
  model1: NgbDateStruct;
  date: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
