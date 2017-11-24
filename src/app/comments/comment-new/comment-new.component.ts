import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';
import { CommentService } from '../comment.service';
import { AlertService } from '../../shared/alert.service';
import { ListService } from '../../lists/list.service';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {

  @Input() showMePartially: boolean;
  @Input() list_id: string;
  loading = false;
  text = new FormControl();

  constructor(private authService: AuthService,
              private router: Router,
              private commentService: CommentService,
              private listService: ListService,
              private alertService: AlertService) { }

  ngOnInit() {
  }
  onAddComment() {
    this.loading = true;
    if (this.authService.isAuthenticated()) {
      this.commentService.saveComment(this.text.value, this.list_id).subscribe(
        data => {
          this.showMePartially = false;
          this.loading = false;
          this.listService.addComment(data);
        },
        error => {
          this.alertService.error(error.error.msg);
          this.loading = false;
        });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
