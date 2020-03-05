import { LinkModel } from './../models/link.model';

// Add Link to State
export class AddLink {
  public static readonly type = '[Link] Add Link';
  constructor(public payload: LinkModel) {}
}

// Delete Link from State
export class DeleteLink {
  public static readonly type = '[Link] Delete Link';
  constructor(public payload: LinkModel[]) {}
}
