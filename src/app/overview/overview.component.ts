import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // The form control for the title
  @Input() formTitle: FormControl;
  // The form control for the link
  @Input() formLink: FormControl;

  constructor() {}

  ngOnInit() {}

  checkUrlExists(url) {}
}
