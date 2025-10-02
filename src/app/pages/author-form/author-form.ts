import { Component } from '@angular/core';
import {PostAuthorDto} from '../../../model/PostAuthorDto';
import {AuthorService} from '../../../services/author-service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-author-form',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './author-form.html',
  styleUrl: './author-form.css'
})
export class AuthorForm
{
  author:PostAuthorDto = {dob:"",fullName:"",nationality:""};

  constructor(public serv:AuthorService) {
  }

}
