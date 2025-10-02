import {Component, Input} from '@angular/core';
import {GetAuthorDto} from '../../../model/GetAuthorDto';
import {AuthorService} from '../../../services/author-service';

@Component({
  //TODO 5 - Cambiare il selector per renderlo una riga (vedere book-row)
  selector: 'tr[autore]',
  imports: [],
  templateUrl: './author-row.html',
  styleUrl: './author-row.css'
})
export class AuthorRow
{
  //TODO 6 - iniettare servizio tramite costruttore
  constructor(public serv:AuthorService) {
  }

  @Input() author:GetAuthorDto | null=null;

}
