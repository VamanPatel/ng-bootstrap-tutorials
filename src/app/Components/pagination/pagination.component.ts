import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  page = 1;
  pageSize = 10;
  items = [];

  constructor() {
    for (let i = 1; i < 100; i++) {
      this.items.push({ Name: 'Shop' + i });
    }
  }

  ngOnInit(): void {}
}
