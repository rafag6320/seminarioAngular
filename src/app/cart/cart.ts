import { Component } from '@angular/core';
import { ProductCart } from '../product-cart';
import { Producto } from '../perfume-list/perfume';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  // 555312

  cartItems$: Observable<Producto[]>;

  constructor(private cart: ProductCart) {
    this.cartItems$ = this.cart.items.asObservable();}

  getTotal(): number {
    let total = 0;
    this.cartItems$.subscribe(items => {
      total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    });
    return total;
  }

  removeFromCart(item: Producto) {
    this.cart.removeFromCart(item);
  }

  buyFromCart() {
    alert("Gracias por tu compra, te esperamos pronto!");
    this.cart.clearCart()
  }
}
