import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { ContactComponent } from './contact';

export const ROUTES: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
