import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'Embabi Store';
  products: Product[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>('https://localhost:7195/api/products').subscribe(
      {
        next: (response) => this.products=response.data,
        error: error => console.log(error),
        complete : () => console.log('complete')
      }
     
    );
    
    
  }
}
