import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Localstorage
  localStorage: any;
  // Links list
  links: any[];

  constructor() {
    // Check the localstorage and get the links from there. If empty initialise the Links object.
    this.localStorage = JSON.parse(localStorage.getItem('Links'));
    console.log('loc', this.localStorage);
  }
}
