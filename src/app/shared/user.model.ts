export class User {
  constructor(
    public username: string,
    public password: string,
    public token: string,
    public followers: User[],
    public following: User[]) { }
}
