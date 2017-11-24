import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  saveComment(text, list_id) {
    const url = 'https://listify-daw-api.herokuapp.com/api/lists/' + list_id + '/comments';
    return this.http
      .post(
        url,
        {
          'text': text,
          'date': Date.now()
        },
        { headers : {
          'Authorization' : this.authService.token
        }
        });
  }
  deleteComment(list_id, comment_id) {
    const url = 'https://listify-daw-api.herokuapp.com/api/lists/' + list_id + '/comments/' + comment_id;
    return this.http
      .delete(
        url,
        { headers : {
          'Authorization' : this.authService.token
        }
        });
  }

}

