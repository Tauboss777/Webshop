import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { SingleProduct } from '../models/product-api.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private Http: HttpClient) { }
  
  private _jsonUrl = 'assets/data/products.json'
  private STORE_API = 'https://fakestoreapi.com/products'

  getJson():Observable<any> {
    return this.Http.get(this._jsonUrl)
  }

  getProducts(): Observable<SingleProduct[]> {
    return this.Http.get<SingleProduct[]>(this.STORE_API)
  }

}


