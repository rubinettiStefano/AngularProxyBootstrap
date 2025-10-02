import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetBookDto} from '../model/GetBookDto';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  //1) punto dove salvare
  books:GetBookDto[] = [];

  constructor(private http:HttpClient)
  {
    this.fillArray();
  }

  //2) metodo per riempire array con response del backend
  fillArray()
  {
    this.http.get<GetBookDto[]>("/api/books").subscribe(resp=>this.books=resp);
  }

  //3) metodi per la lettura dell'array, usati dai componenti
  getAllBooks()
  {
    return this.books;
  }
  getBooksByAuthorName(name:string)
  {
    return this.books.filter(b=>b.authorName.toLowerCase().includes(name.toLowerCase()));
  }

  //4) metodo per la cancellazione
  deleteById(id:string)
  {
    //                                            dopo aver cancellato refresho array con i dati del backend
    this.http.delete("/api/books/"+id).subscribe(()=>this.fillArray());
  }

}
