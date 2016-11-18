import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { UserBoardComponent } from './user-board';
import { GuestBoardComponent } from './guest-board';
import { ProfileService } from './profile/src/profile.service';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: GuestBoardComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'contact',
      component: ContactComponent
    },]
  },
  {
    path: 'user',
    redirectTo: '/user/home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserBoardComponent,
    children: [{
      path: 'home',
      component: HomeComponent,
      canActivate: [ProfileService]
    }, {
      path: 'contact',
      canActivate: [ProfileService],
      component: ContactComponent
    },]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
