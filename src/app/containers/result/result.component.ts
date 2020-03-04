import { LinkModel } from './../../core/models/link.model';
import { LinkSelectors } from './../../core/store/link.selectors';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  // Select for last Link added
  @Select(LinkSelectors.getLastLink) lastLink$: Observable<LinkModel>;

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {}

  // facilitator for the router method
  routerGo(route: string) {
    this.router.navigate([route]);
  }
}
