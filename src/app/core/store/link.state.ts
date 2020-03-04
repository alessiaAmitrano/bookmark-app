import { LinkStateModel, LINK_INITIAL_STATE } from './link.adapter';

import { State } from '@ngxs/store';
@State<LinkStateModel>({
  name: 'Links',
  defaults: LINK_INITIAL_STATE
})
export class LinkState {}
