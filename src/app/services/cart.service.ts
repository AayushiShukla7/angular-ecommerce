import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      image: "https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg?semt=ais_hybrid&w=740",
      price: 79.99,
      stock: 25
    },
    {
      id: 2,
      title: "Smart LED TV 50-inch",
      image: "https://img.freepik.com/free-psd/modern-tv-isolated_23-2151430334.jpg?semt=ais_hybrid&w=740",
      price: 449.99,
      stock: 12
    }
  ]);

  constructor() { }

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]); // Add the product to the end pof the list of products in the cart
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter((p) => p.id !== productId)); // Exclude the product with the id passed from the cart
  }
}
