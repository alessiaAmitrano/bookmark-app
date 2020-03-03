import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';

const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // Form to grab user input
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required, this.isValidLink])
    });
  }

  private isValidLink(control: FormControl): ValidationErrors {
    const textExp: RegExp = urlRegex;
    if (!textExp.test(control.value)) {
      return { invalidText: true };
    }
    return null;
  }

  checkUrlExists(url) {}
}
