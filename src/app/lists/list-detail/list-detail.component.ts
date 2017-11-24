import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { List } from '../../shared/list.model';
import { ListService } from '../list.service';
import { AuthService } from '../../auth/auth.service';
import { CommentService } from '../../comments/comment.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  list: List;
  list_id: string;
  editMode = false;
  likeable = true;
  showVar = false;
  subscription: Subscription;

  constructor(private listService: ListService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private commentService: CommentService) {
    this.subscription = this.listService.getComment().subscribe(comment => { this.list.comments.push(comment); });
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.list_id = params['list_id'];
          this.listService.getList(this.list_id)
            .subscribe(
              (list: List) => {
                this.list = list;
                if (this.authService.isAuthenticated()) {
                  if ( list.author.username === this.authService.username ) {
                    this.editMode = true;
                  }
                  if (list.likes.indexOf(this.authService.user)) {
                    this.likeable = false;
                  }
                }
              });
        }
      );
  }
  onDelete() {
    this.listService.deleteList(this.list_id)
      .subscribe(
      () => {
          this.router.navigate(['/' + this.authService.username]);
        });
  }
  onLike() {
    if (this.authService.isAuthenticated()) {
      this.listService.likeList(this.list_id);
      this.likeable = false;
    } else {
      this.router.navigate(['/login']);
    }
  }
  toggleComment() {
    if (this.authService.isAuthenticated()) {
        this.showVar = !this.showVar;
    } else {
        this.router.navigate(['/login']);
    }
  }
  onDeleteComment(comment_id) {
    let deleteIndex: number;
    this.list.comments.forEach(function(comment, index) {
      if (comment._id === comment_id) {
        deleteIndex = index;
      }
    });
    if (deleteIndex !== undefined) {
      this.list.comments.splice(deleteIndex, 1);
      this.commentService.deleteComment(this.list_id, comment_id).subscribe();
    }
  }
  onDislike() {
    // this.listService.removeLike(this.list._id);
  }
}
