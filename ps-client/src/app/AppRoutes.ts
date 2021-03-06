import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AlbumsComponent, AlbumsResolver } from './albums';
import { ContactComponent } from './contact';
import { UserBoardComponent } from './user-board';
import { GuestBoardComponent } from './guest-board';
import { ProfileService } from './profile';

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
      component: HomeComponent
    }, {
      path: 'contact',
      canActivate: [ProfileService],
      component: ContactComponent
    }, {
      path: 'albums',
      canActivate: [ProfileService],
      component: AlbumsComponent,
      resolve: {
        albums: AlbumsResolver
      }
    }]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
