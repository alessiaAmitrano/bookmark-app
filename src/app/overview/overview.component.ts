import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const url = 'https://www.theguardian.com/uk';
    this.checkUrlExists(url);
  }

  checkUrlExists(url) {}
}
