import { AddLink, DeleteLink, EditLink } from './link.actions';
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

  // Delete link from state
  @Action(DeleteLink)
  deleteLink(ctx: StateContext<LinkStateModel>, { payload }: DeleteLink) {
    const state = ctx.getState();
    ctx.patchState({ links: payload, lastLink: null });
  }

  // Edit link from state
  @Action(EditLink)
  editLink(ctx: StateContext<LinkStateModel>, { payload }: EditLink) {
    const state = ctx.getState();
    ctx.patchState({ links: payload });
  }
}
