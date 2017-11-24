import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { UserProfileComponent } from '../users/user-profile/user-profile.component';
import { CommentNewComponent } from '../comments/comment-new/comment-new.component';

@NgModule({
  declarations: [
    ListDetailComponent,
    ListsComponent,
    ListEditComponent,
    UserProfileComponent,
    CommentNewComponent
  ],
  imports: [
    ListsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    // SharedModule
  ]
})

export class ListsModule {
}
