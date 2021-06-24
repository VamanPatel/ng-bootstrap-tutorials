import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert, NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  successMessage = '';
  @ViewChild('selfClosingAlert') selfClosingAlert: NgbAlert;

  constructor(alertConfig: NgbAlertConfig) {}

  ngOnInit(): void {}

  changeSuccessMessage() {
    this.successMessage = `${new Date()} - Message sucessfully displayed`;

    setTimeout(() => {
      this.selfClosingAlert.close();
    }, 2000);
  }
}
