import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  constructor() { }

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]); // Add the product to the end pof the list of products in the cart
  }
}
