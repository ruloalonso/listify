import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import 'rxjs/Rx';

import { ListService } from '../lists/list.service';
import { List } from './list.model';
// import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private listService: ListService,
              // private authService: AuthService
  ) { }




  // storeLists() {
  //   const token = this.authService.getToken();
  //
  //   return this.http.put('https://ng-lists-db.firebaseio.com/lists.json?auth=' + token, this.listService.getLists());
  // }
  //
  // getLists() {
  //   const token = this.authService.getToken();
  //
  //   this.http.get('https://ng-lists-db.firebaseio.com/lists.json?auth=' + token)
  //     .map(
  //       (response: Response) => {
  //         const lists: List[] = response.json();
  //         for (let list of lists) {
  //           if (!list['ingredients']) {
  //             list['ingredients'] = [];
  //           }
  //         }
  //         return lists;
  //       }
  //     )
  //     .subscribe(
  //       (lists: List[]) => {
  //         this.listService.setLists(lists);
  //       }
  //     );
  // }
}
