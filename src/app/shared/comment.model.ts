import { User } from './user.model';

export class Comment {
  constructor(
    public _id: string,
    public text: string,
    public author: User,
    public date: Date) { }
}
