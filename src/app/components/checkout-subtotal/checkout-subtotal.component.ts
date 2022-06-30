import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-subtotal',
  templateUrl: './checkout-subtotal.component.html',
  styleUrls: ['./checkout-subtotal.component.css']
})
export class CheckoutSubtotalComponent implements OnInit {

  constructor(public shoppingCart: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
  }

  makeOrder(pageName: string):void {
    this.router.navigate(['../order']);
  }
}
