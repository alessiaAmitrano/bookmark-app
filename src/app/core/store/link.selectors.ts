import { LinkStateModel } from './link.adapter';
import { LinkModel } from './../models/link.model';
import { Selector } from '@ngxs/store';
import { LinkState } from './link.state';

export class LinkSelectors {
  @Selector([LinkState])
  static getLinks(state: LinkStateModel): LinkModel[] {
    return state.links;
  }

  @Selector([LinkState])
  static getLastLink(state: LinkStateModel): LinkModel {
    return state.lastLink;
  }
}
