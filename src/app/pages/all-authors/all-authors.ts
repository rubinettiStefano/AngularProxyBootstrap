import { Component } from '@angular/core';
import {AuthorService} from '../../../services/author-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorRow} from '../../parts/author-row/author-row';

@Component({
  selector: 'app-all-authors',
  imports: [
    AuthorRow,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './all-authors.html',
  styleUrl: './all-authors.css'
})
export class AllAuthors
{
  constructor(public serv:AuthorService) {
  }
  fullName:string="";
}
