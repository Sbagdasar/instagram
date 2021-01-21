import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from './post/post.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FeedComponent} from './feed/feed.component';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'post',
    children: [
      {
        path: ':id',
        component: PostComponent,
      }
    ]
  }
]; // заводятся пути еще надо в компоненте прописать а до этого вставить <спан [routerLink]="['/']"> <router-outlet></router-outlet>
// children для вхождения в ссылке
@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
