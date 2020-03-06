import { routerAnimation } from './animations/routing.animations';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation]
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

  getPage(outlet: RouterOutlet) {
    // tslint:disable-next-line: no-string-literal
    // return outlet.activatedRouteData['page'] || '';
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
