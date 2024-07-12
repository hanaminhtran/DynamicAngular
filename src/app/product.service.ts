// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonURL = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    var p =  this.http.get(this.jsonURL);
    //alert(p);
    return p;
  }
}
