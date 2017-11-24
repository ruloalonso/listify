import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListsComponent } from './lists.component';
import { ListEditComponent } from './list-edit/list-edit.component';
import { PublicListsComponent } from './public-lists/public-lists.component';
import { UserProfileComponent } from '../users/user-profile/user-profile.component';

const listsRoutes: Routes = [
  { path: '', component: ListsComponent, children: [
    { path: '', component: UserProfileComponent },
    { path: 'new', component: ListEditComponent },
    { path: ':list_id', component: ListDetailComponent },
    { path: ':list_id/edit', component: ListEditComponent },
    ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(listsRoutes)
  ],
  exports: [RouterModule]
})
export class ListsRoutingModule {
}
