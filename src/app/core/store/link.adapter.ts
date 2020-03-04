import { LinkModel } from './../models/link.model';

export interface LinkStateModel {
  links: LinkModel[];
  lastLink: LinkModel;
}

export const LINK_INITIAL_STATE = {
  links: [],
  lastLink: null
};
