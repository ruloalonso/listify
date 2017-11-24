import { Component, OnInit } from '@angular/core';

import { List } from '../../shared/list.model';
import { ListService } from '../list.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list-start',
  templateUrl: './public-lists.component.html',
  styleUrls: ['./public-lists.component.css']
})
export class PublicListsComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService,
              private authService: AuthService) { }

  ngOnInit() {
    this.listService.getPublicLists()
      .subscribe(
        (lists: List[]) => {
          this.lists = lists;
        });
  }
}
