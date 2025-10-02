import { Injectable } from '@angular/core';
import {GetAuthorDto} from '../model/GetAuthorDto';
import {HttpClient} from '@angular/common/http';
import {GetBookDto} from '../model/GetBookDto';
import {PostAuthorDto} from '../model/PostAuthorDto';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorService
{
  //CREARE il servizio seguendo quello di book, stessi metodi

  authors:GetAuthorDto[] = []

  constructor(private http:HttpClient,private router:Router)
  {
    this.fillArray();
  }
  fillArray()
  {
    this.http.get<GetAuthorDto[]>("/api/authors").subscribe(resp=>this.authors=resp);
  }

  getAllAuthors() {
    return this.authors;
  }

  getByAuthorName(name:string)
  {
    return this.authors.filter(b=>b.fullName.toLowerCase().includes(name.toLowerCase()));
  }

  deleteAuthorByID(id:string) {
    this.http.delete("/api/authors/"+id).subscribe(()=>this.fillArray());
  }

  insertAuthor(author:PostAuthorDto)
  {
    this.http.post("api/authors",author)
      .subscribe(()=>
      {
        this.fillArray();
        this.router.navigate(["/authors"]);//cambia uri in /authors, uguale a premere un link


      });
  }
}
