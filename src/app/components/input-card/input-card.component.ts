import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {
  // Link
  @Input() linkControl: FormControl;
  // Is Edit process on
  @Input() isEditLinkOn: boolean;
  // Event emitter for Link Add
  @Output() addLinkEmt: EventEmitter<any> = new EventEmitter<any>();
  // Event emitter for link Edit
  @Output() editLinkEmt: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
