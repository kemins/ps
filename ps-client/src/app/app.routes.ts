import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { ContactComponent } from './contact';

import { DataResolver } from './app.resolver';


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
