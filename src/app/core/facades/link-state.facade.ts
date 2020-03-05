import { EditLink } from './../store/link.actions';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LinkSelectors, DeleteLink, AddLink } from '../store';
import { Observable, BehaviorSubject } from 'rxjs';
import { LinkModel } from '../models/link.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkStateFacade {
  // Invalid response status code (actual response code from the remote server)
  invalidUrlCode = 425;
  // Id of the last link added
  nextLinkId = 0;
  // Boolean to signal the website doesn't exists (the http call returned an error)
  urlExists$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  @Select(LinkSelectors.getLinks) links$: Observable<LinkModel[]>;

  // performs a Get, adds link if successful otherwise returns an error
  getLinkInfo(url: string, links: LinkModel[]) {
    this.http.get(environment.linkPreviewKey + url).subscribe(
      (data: LinkModel[]) => {
        this.urlExists$.next(true);
        this.addLink(data, links);
      },
      error => {
        console.log('error', error);
        if (error.status === this.invalidUrlCode) {
          this.urlExists$.next(false);
          setTimeout(() => {
            this.urlExists$.next(null);
          }, 5000);
        }
      }
    );
  }

  // delete link
  deleteLink(link: LinkModel, links: LinkModel[]) {
    const newList =
      links.length > 1 ? links.filter(el => el.id !== link.id) : [];
    this.store.dispatch(new DeleteLink(newList));
  }

  // performs a get, if successful edits the link
  getEditLinkInfo(url: string, linkId: number, links: LinkModel[]) {
    this.http.get(environment.linkPreviewKey + url).subscribe(
      (data: LinkModel[]) => {
        this.urlExists$.next(true);
        this.editLink(data, linkId, links);
      },
      error => {
        console.log('error', error);
        if (error.status === this.invalidUrlCode) {
          this.urlExists$.next(false);
          setTimeout(() => {
            this.urlExists$.next(null);
          }, 5000);
        }
      }
    );
  }

  // add link to the array in store and localstorage
  private addLink(linkData: any, links: LinkModel[]) {
    if (links.length !== 0) {
      this.nextLinkId++;
    }
    linkData.id = this.nextLinkId;
    this.store.dispatch(new AddLink(linkData));
    // go to the result page
    this.routerGo('result');
  }

  private editLink(linkData: any, id: number, links: LinkModel[]) {
    const newList = [];
    for (const link of links) {
      if (link.id === id) {
        link.description = linkData.description;
        link.image = linkData.image;
        link.title = linkData.title;
        link.url = linkData.url;
      }
      newList.push(link);
    }
    this.store.dispatch(new EditLink(newList));
  }

  // facilitator for the router method
  routerGo(route: string) {
    this.router.navigate([route]);
  }
}
