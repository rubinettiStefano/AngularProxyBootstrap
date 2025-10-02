import { Routes } from '@angular/router';
import {Homepage} from './pages/homepage/homepage';
import {AllBooks} from './pages/all-books/all-books';

export const routes: Routes = [
  {path:"",component:Homepage},
  {path:"books",component:AllBooks},

];
