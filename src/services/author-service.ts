import { Injectable } from '@angular/core';
import {GetBookDto} from '../model/GetBookDto';
import {HttpClient} from '@angular/common/http';
import {GetAuthorDto} from '../model/GetAuthorDto';

@Injectable({
  providedIn: 'root'
})
export class AuthorService
{
  //1) punto dove salvare autore
  authors:GetAuthorDto[] = [];

  constructor(private http:HttpClient)
  {
    this.fillArray();
  }

  //2) metodo per riempire array con response del backend
  fillArray()
  {
    this.http.get<GetAuthorDto[]>("/api/authors").subscribe(resp=>this.authors=resp);
  }

  //3) metodi per la lettura dell'array, usati dai componenti
  getAllAuthors()
  {
    return this.authors;
  }
  getByAuthorName(name:string)
  {
    return this.authors.filter(a=>a.fullName.toLowerCase().includes(name.toLowerCase()));
  }

  //4) metodo per la cancellazione
  deleteAuthorById(id:string)
  {
    //                                            dopo aver cancellato refresho array con i dati del backend
    this.http.delete("/api/authors/"+id).subscribe(()=>this.fillArray());
  }
}
