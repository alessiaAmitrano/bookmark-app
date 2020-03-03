import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {
  // Title
  @Input() titleControl: FormControl;
  // Link
  @Input() linkControl: FormControl;
  // Submit Event
  @Output() addLinkEmt: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
