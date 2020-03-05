import { AddLink, DeleteLink } from './../../core/store/link.actions';
import { LinkModel } from './../../core/models/link.model';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { LinkStateFacade } from 'src/app/core/facades/link-state.facade';

// Regular expression to validate Urls
const urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // Links
  links: LinkModel[];
  // Form to grab user input
  form: FormGroup;
  // Boolean to show edit buttons on links
  canEditLinks = true;
  // Boolean to show the edit process is on
  isEditingLink = false;
  // Link being edited
  editedLink: LinkModel;

  // Boolean to signal the website doesn't exists (the http call returned an error)
  urlExists: boolean;

  constructor(private store: Store, private linksFacade: LinkStateFacade) {
    linksFacade.links$.subscribe(links => (this.links = links));
    linksFacade.urlExists$.subscribe(exists => (this.urlExists = exists));
  }

  ngOnInit() {
    // Initialise the form
    this.form = new FormGroup({
      link: new FormControl('', [Validators.required, this.isValidLink])
    });
  }

  // perform http call to check that Url exists and retreive info, otherwise handle error
  onLinkSubmit() {
    const link = this.form.get('link').value;
    console.log('link', link);
    this.linksFacade.getLinkInfo(link, this.links);
  }

  // Deletes link from the list
  onDeleteLink(link: LinkModel) {
    console.log('Deleting item with id ', link.id);
    this.linksFacade.deleteLink(link, this.links);
  }

  // Sets the form to edit the selected Link
  onEditLink(link: LinkModel) {
    this.form.setValue({ link: link.url });
    this.editedLink = link;
    document.documentElement.scrollTop = 0;
  }

  // Edits the link and sends to the store
  onLinkEditSubmit() {
    const link = this.form.get('link').value;
    this.linksFacade.getEditLinkInfo(link, this.editedLink.id, this.links);
    this.editedLink = null;
    this.form.reset();
  }

  // Check Link with Regular Expression
  private isValidLink(control: FormControl): ValidationErrors {
    const textExp: RegExp = urlRegex;
    if (!textExp.test(control.value)) {
      return { invalidLink: true };
    }
    return null;
  }
}
