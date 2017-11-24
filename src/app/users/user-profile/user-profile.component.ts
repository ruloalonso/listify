import { Component, OnInit } from '@angular/core';
import { List } from '../../shared/list.model';
import { ListService } from '../../lists/list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  lists: List[];
  user: User;
  username: string;
  countLists = 0;

  constructor(private listService: ListService,
              private authService: AuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.username = params['username'];
          this.listService.getLists(this.username)
            .subscribe(
              (lists: List[]) => {
                this.lists = lists;
                this.countLists = this.lists.length;
              });
          this.authService.getUserInfo(this.username)
            .subscribe(
              (user: User) => {
                this.user = user;
              });
        }
      );
  }
}
