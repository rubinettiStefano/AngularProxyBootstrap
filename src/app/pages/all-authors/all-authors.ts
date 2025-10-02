import { Component } from '@angular/core';
import {AuthorService} from '../../../services/author-service';
import {BookRow} from '../../parts/book-row/book-row';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorRow} from '../../parts/author-row/author-row';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-all-authors',
  imports: [
    BookRow,
    ReactiveFormsModule,
    FormsModule,
    AuthorRow,
    RouterLink
  ],
  templateUrl: './all-authors.html',
  styleUrl: './all-authors.css'
})
export class AllAuthors
{

  constructor(public serv:AuthorService) {

  }

  authorName:string = ""
}
