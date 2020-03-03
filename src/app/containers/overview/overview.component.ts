import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Regular expression to validate Urls
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // Form to grab user input
  form: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Initialise the form
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required, this.isValidLink])
    });
  }

  // Check Link with Regular Expression
  private isValidLink(control: FormControl): ValidationErrors {
    const textExp: RegExp = urlRegex;
    if (!textExp.test(control.value)) {
      return { invalidLink: true };
    }
    return null;
  }

  // checkUrlExists(url) {}

  logValues() {
    const link = this.form.get('link').value;
    console.log('title', this.form.get('title').value);
    console.log('link', link);
    this.http
      .get(environment.linkPreviewKey + link)
      .subscribe(data => console.log(data));
  }
}
