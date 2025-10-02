import {Component, Input} from '@angular/core';
import {GetBookDto} from '../../../model/GetBookDto';
import {BookService} from '../../../services/book-service';

@Component({
  selector: 'tr[libro]',
  imports: [],
  templateUrl: './book-row.html',
  styleUrl: './book-row.css'
})
export class BookRow
{
  constructor(public serv:BookService) {
  }

  @Input() book:GetBookDto | null=null;
}
