import {Component, Input} from '@angular/core';
import {BookService} from '../../../services/book-service';
import {BookRow} from '../../parts/book-row/book-row';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-all-books',
  imports: [
    BookRow,
    FormsModule
  ],
  templateUrl: './all-books.html',
  styleUrl: './all-books.css'
})
export class AllBooks
{

  //inietto nel componente i servizi di cui necessita
  //se voglio usare direttamente metodi del servizio nell'html,
  //devo iniettarlo come public
  constructor(public serv:BookService) {
  }

  @Input() authorName:string="";

}
