import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../service/books.service'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
   public  books : any ;
  constructor(private _service : BooksService) { }

  ngOnInit() {
    this._service.AllBooks().subscribe((data)=>{
    this. books =data;
    console.log(data);
    })
  }

}
