import { LinkModel } from './../../core/models/link.model';
import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-link-detail-card',
  templateUrl: './link-detail-card.component.html',
  styleUrls: ['./link-detail-card.component.scss']
})
export class LinkDetailCardComponent implements OnInit {
  // The Link Object
  @Input() link: LinkModel;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  // sanitize background image
  getBkgImg(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
