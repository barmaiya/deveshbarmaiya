import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService implements OnInit {


  constructor(private http : HttpClient) { }
  ngOnInit()
  {
    
    
  }

 public  AllBooks()
  {
    let url = "http://localhost:3000/api/books/";
    return this.http.get(url);
  }

}
