import { Item } from './item.model';
import { Comment } from './comment.model';
import { User } from './user.model';

export class List {
  constructor(
    public name: string,
    public image: string,
    public isPublic: boolean,
    public comments: Comment[],
    public items: Item[],
    public author: User,
    public date: Date,
    public likes: User[]) { }
}



