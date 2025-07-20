import { Component } from '@angular/core';
import { Producto } from './perfume';
import { ProductCart } from '../product-cart';
 
@Component({
  selector: 'app-perfume-list',
  standalone: false,
  templateUrl: './perfume-list.html',
  styleUrl: './perfume-list.scss'
})
export class PerfumeList {
  
  perfumes: Producto[]=[
    {
      "name":"Blue Seduction",
      "type":"Eau de Toilette",
      "price":25000,
      "stock":20,
      "image": "assets/img/blue.jpg",
      "quantity":0
    },
    {
      "name":"King of Seduction",
      "type":"Eau de Toilette",
      "price":32000,
      "stock":5,
      "image": "assets/img/king.jpg",
      "quantity":0
    },
    {
      "name":"The Secret",
      "type":"Eau de Toilette",
      "price":35000,
      "stock":43,
      "image": "assets/img/secret.png",
      "quantity":0
    },
    {
      "name":"The Icon",
      "type":"Eau de Parfum",
      "price":50000,
      "stock":40,
      "image": "assets/img/icon.jpg",
      "quantity":0
    }
  ]

  constructor(private cart: ProductCart) {
    this.cart = cart
  }

  addToCart(perfume: Producto) {
    this.cart.addToCart(perfume);
    perfume.quantity = 0;
  }

  getAvailableStock(perfume: Producto): number {
    return this.cart.getAvailableStock(perfume);
  }
}
