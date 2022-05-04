import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ProductsService) { }

  items: any;

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.api.getJson().subscribe(resp =>{
      this.items = resp
    })
  }

}
