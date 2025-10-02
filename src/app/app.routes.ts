import { Routes } from '@angular/router';
import {Homepage} from './pages/homepage/homepage';
import {AllBooks} from './pages/all-books/all-books';
import {AllAuthors} from './pages/all-authors/all-authors';
import {AuthorForm} from './pages/author-form/author-form';
import {BookForm} from './pages/book-form/book-form';

export const routes: Routes = [
  {path:"",component:Homepage},
  {path:"books/:authorName",component:AllBooks},
  {path:"authors",component:AllAuthors},
  {path:"form-author",component:AuthorForm},
  //form-book/{author_id}
  {path:"form-book/:author_id",component:BookForm},

];
