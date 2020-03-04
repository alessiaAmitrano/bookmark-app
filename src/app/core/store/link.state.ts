import { AddLink } from './link.actions';
import { LinkStateModel, LINK_INITIAL_STATE } from './link.adapter';

import { State, Action, StateContext } from '@ngxs/store';
@State<LinkStateModel>({
  name: 'Links',
  defaults: LINK_INITIAL_STATE
})
export class LinkState {
  // Add link to state
  @Action(AddLink)
  addLink(
    { getState, setState }: StateContext<LinkStateModel>,
    { payload }: AddLink
  ) {
    const state = getState();
    const newLinks = [...state.links, payload];
    setState({
      ...state,
      links: newLinks,
      lastLink: payload
    });
  }
}
