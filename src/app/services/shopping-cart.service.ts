import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
  addProduct = (product: string)=> {
    localStorage.setItem('shopping_cart', product)
  }
}
