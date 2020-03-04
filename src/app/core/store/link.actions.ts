import { LinkModel } from './../models/link.model';

export class AddLink {
  public static readonly type = '[Link] Add Link';
  constructor(public payload: LinkModel) {}
}
