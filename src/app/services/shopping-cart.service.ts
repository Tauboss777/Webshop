import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shopping_cart_items: any = [] = [];

  constructor() { }
  addProduct = (product: string)=> {
    let items = this.getShoppingCartItems();
    console.log(items)
    if(items) {
      items.push(product)
      localStorage.setItem('shopping_cart', JSON.stringify(items))
    }

  }

  getShoppingCartItems = () => {
    let items = localStorage.getItem("shopping_cart")||'[]'
    return JSON.parse(items)
  }

  getCartLength = () => {
    let items = this.getShoppingCartItems();
    return items? this.getShoppingCartItems().length: 0
  }

  getTotal = () => {
    let items = this.getShoppingCartItems();
    return items?.reduce((acc: any, item: { price: any; })=> acc + item.price ,0).toFixed(2)
  }
  
  removerItem=(p: { id: any; })=>{
    console.log('calling remover ', p)
    let items = this.getShoppingCartItems();
    
    const index = items.findIndex((item: { id: any; }) => item.id == p.id);
    if(index >= 0){
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items))
    }
  }
}
