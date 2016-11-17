import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { UserBoardComponent } from './user-board';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'user-board',
    component: UserBoardComponent
  }
];
