import { Injectable } from '@angular/core';
import { Producto } from './perfume-list/perfume';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCart {

  private _items: Producto[] = [];
  items: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);

  addToCart(item: Producto) {
    const existingItem = this._items.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this._items.push({ ...item });
    }
    this.items.next(this._items); // Se notifica el nuevo valor del observable
  }

  getQuantityInCart(perfumeName: string): number {
    const item = this._items.find(p => p.name === perfumeName); // Se checkea si existe el perfume en el carrito
    return item?.quantity || 0; // Retorna la cantidad del perfume en el carrito o 0 si no existe
  }

  getAvailableStock(producto: Producto): number {
    const quantityInCart = this.getQuantityInCart(producto.name); // Se obtiene la quantity del producto en el carrito
    return producto.stock - quantityInCart; // Devuelve el stock disponible menos la cantidad del carrito
  }

  removeFromCart(itemARemover: Producto) {
    this._items = this._items.filter(item => item.name !== itemARemover.name); // Se filtran los items para eliminar el item a sacar
    this.items.next(this._items);
  }

  clearCart() {
    this._items = []; // Se borra el carrito 
    this.items.next(this._items);
  }

}
