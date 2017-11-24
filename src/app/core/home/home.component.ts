import { Component, OnInit } from '@angular/core';

import { ListService } from '../../lists/list.service';
import { List } from '../../shared/list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lists: List[];

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listService.getPublicLists()
      .subscribe(
        (lists: List[]) => {
          this.lists = lists;
        });
  }
}
