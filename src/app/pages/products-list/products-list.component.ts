import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products = signal<Product[]>([
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      image: "https://images.unsplash.com/photo-1585386959984-a415522c3303?auto=format&fit=crop&w=600&q=80",
      price: 79.99,
      stock: 25
    },
    {
      id: 2,
      title: "Smart LED TV 50-inch",
      image: "https://images.unsplash.com/photo-1606811841830-bd4c59b8f9ad?auto=format&fit=crop&w=600&q=80",
      price: 449.99,
      stock: 12
    },
    {
      id: 3,
      title: "Portable Power Bank 20000mAh",
      image: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=600&q=80",
      price: 29.99,
      stock: 48
    },
    {
      id: 4,
      title: "Gaming Mouse RGB",
      image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3b0c?auto=format&fit=crop&w=600&q=80",
      price: 39.99,
      stock: 34
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle",
      image: "https://images.unsplash.com/photo-1600185365313-1a46ec8a9b68?auto=format&fit=crop&w=600&q=80",
      price: 15.99,
      stock: 0
    },
    {
      id: 6,
      title: "Laptop Backpack - Waterproof",
      image: "https://images.unsplash.com/photo-1614624532983-c1c60c6944a3?auto=format&fit=crop&w=600&q=80",
      price: 54.99,
      stock: 10
    },
    {
      id: 7,
      title: "4K Action Camera",
      image: "https://images.unsplash.com/photo-1580910051070-c1d90a79bba8?auto=format&fit=crop&w=600&q=80",
      price: 119.99,
      stock: 8
    },
    {
      id: 8,
      title: "Smartphone Tripod Stand",
      image: "https://images.unsplash.com/photo-1616530940355-51c7aa295f4b?auto=format&fit=crop&w=600&q=80",
      price: 18.49,
      stock: 60
    },
    {
      id: 9,
      title: "Wireless Keyboard and Mouse Combo",
      image: "https://images.unsplash.com/photo-1616683693504-c791e05aa6f7?auto=format&fit=crop&w=600&q=80",
      price: 49.95,
      stock: 20
    },
    {
      id: 10,
      title: "Ceramic Coffee Mug Set (6 pcs)",
      image: "https://images.unsplash.com/photo-1603394311746-20b0105e79e7?auto=format&fit=crop&w=600&q=80",
      price: 24.99
      // stock is intentionally omitted
    }
  ]);

}
