import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {

  private subject = new Subject<any>();

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  getComment(): Observable<any> {
    return this.subject.asObservable();
  }

  addComment(data) {
    this.subject.next(data.comment);
  }

  getLists(username) {
    if (this.authService.isAuthenticated() && this.authService.username === username) {
        return this.getPrivateListsFromUser(username);
    }
    return this.getPublicListsFromUser(username);
  }

  getPublicLists() {
    return this.http.get('https://listify-daw-api.herokuapp.com/api/lists/');
  }
  getList(id) {
    if (this.authService.isAuthenticated()) {
      return this.http.get(
        'https://listify-daw-api.herokuapp.com/api/lists/' + id,
        {
          headers: {
            'Authorization': this.authService.token
          }
        });
    }
    return this.http.get('https://listify-daw-api.herokuapp.com/api/lists/' + id);
  }
  getPublicListsFromUser(username) {
    return this.http.get('https://listify-daw-api.herokuapp.com/api/lists/user/' + username);
  }
  getPrivateListsFromUser(username) {
    return this.http.get(
      'https://listify-daw-api.herokuapp.com/api/lists/user/' + username + '/private',
      {
        headers: {
          'Authorization': this.authService.token
        }
      });
  }
  saveList(list) {
    return this.http
      .post(
        'https://listify-daw-api.herokuapp.com/api/lists',
        {
          'name': list.name,
          'isPublic': list.isPublic,
          'image': list.image,
          'items': list.items,
          'date': Date.now()
        },
        { headers : {
          'Authorization' : this.authService.token
        }
      });
  }

  deleteList(list_id) {
    return this.http
      .delete(
        'https://listify-daw-api.herokuapp.com/api/lists/' + list_id,
        {
          headers: {
            'Authorization': this.authService.token
          }
        });
  }

  likeList(list_id) {

  }
}

