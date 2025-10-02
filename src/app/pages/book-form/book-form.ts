import {Component, Input} from '@angular/core';
import {BookService} from '../../../services/book-service';

@Component({
  selector: 'app-book-form',
  imports: [],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm
{

  @Input() author_id:string="";
  //TODO A1 - Creare proprietà book con model creato a partire dal dto di input in backend

  constructor(public serv:BookService) {

  }


  salvaBook()
  {
    this.book.author_id=this.author_id;
    //TODO A4 creare metodo insert book nel servizio
    //farlo redirectare alla pagina di tutti i libri
    //TODO A5 opzionale (più difficile di quanto sembri): trovare il modo per passare
    //alla pagina dei libri il nome dell'autore del libro inserito
    //e automaticamente filtrare i libri per quello
    this.serv.insertBook(this.book);
  }
}
