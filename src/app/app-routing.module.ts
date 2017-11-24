import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PublicListsComponent } from './lists/public-lists/public-lists.component';
// import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'lists', component: PublicListsComponent },
  // { path: 'users',
  //   // canLoad: [AuthGuard],
  //   // canActivate: [AuthGuard],
  //   loadChildren: './users/users.module#UsersModule'
  // },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: ':username', loadChildren: './lists/lists.module#ListsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule {

}
