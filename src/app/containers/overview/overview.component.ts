import { LinkSelectors } from './../../core/store/link.selectors';
import { LinkState } from './../../core/store/link.state';
import { AddLink, DeleteLink } from './../../core/store/link.actions';
import { LinkModel } from './../../core/models/link.model';
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Regular expression to validate Urls
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // Links Observable
  @Select(LinkSelectors.getLinks) links$: Observable<LinkModel[]>;
  // Links
  links: LinkModel[];
  // Form to grab user input
  form: FormGroup;
  // Boolean to signal the website doesn't exists (the http call returned an error)
  urlExists: boolean;
  // Invalid response status code (actual response code from the remote server)
  invalidUrlCode = 425;
  // Id of the last link added
  nextLinkId = 0;

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {
    this.links$.subscribe(links => (this.links = links));
  }

  ngOnInit() {
    // Initialise the form
    this.form = new FormGroup({
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

  // perform http call to check that Url exists and retreive info, otherwise handle error
  onLinkSubmit() {
    const link = this.form.get('link').value;
    console.log('link', link);
    this.http.get(environment.linkPreviewKey + link).subscribe(
      (data: LinkModel[]) => {
        this.urlExists = true;
        this.addLink(data);
      },
      error => {
        console.log('error', error);
        if (error.status === this.invalidUrlCode) {
          this.urlExists = false;
          setTimeout(() => {
            this.urlExists = null;
          }, 5000);
        }
      }
    );
  }

  // add link to the array in store and localstorage
  addLink(data: any): void {
    if (this.links.length !== 0) {
      this.nextLinkId++;
    }
    data.id = this.nextLinkId;
    this.store.dispatch(new AddLink(data));
    // go to the result page
    this.routerGo('result');
  }

  // Deletes link from the list
  onDeleteLink(link: LinkModel) {
    console.log('Deleting item with id ', link.id);
    const newList =
      this.links.length > 1 ? this.links.filter(el => el.id !== link.id) : [];
    this.store.dispatch(new DeleteLink(newList));
  }

  // facilitator for the router method
  routerGo(route: string) {
    this.router.navigate([route]);
  }
}
