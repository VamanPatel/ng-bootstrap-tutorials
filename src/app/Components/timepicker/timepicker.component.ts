import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
})
export class TimepickerComponent implements OnInit {
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;

  constructor() {}

  ngOnInit(): void {}

  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
