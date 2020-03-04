import { LinkModel } from './../models/link.model';

// Add Link to State
export class AddLink {
  public static readonly type = '[Link] Add Link';
  constructor(public payload: LinkModel) {}
}
