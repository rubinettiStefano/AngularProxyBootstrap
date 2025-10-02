import {Component, Input} from '@angular/core';
import {GetAuthorDto} from '../../../model/GetAuthorDto';
import {AuthorService} from '../../../services/author-service';
import {RouterLink} from '@angular/router';

@Component({
  // - Cambiare il selector per renderlo una riga (vedere book-row)
  selector: 'tr[Autore]',
  imports: [
    RouterLink
  ],
  templateUrl: './author-row.html',
  styleUrl: './author-row.css'
})
export class AuthorRow
{
  // iniettare servizio tramite costruttore

  constructor(public serv:AuthorService) {
  }
  @Input() author:GetAuthorDto | null=null;

}
