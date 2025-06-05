import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-products-list',
  imports: [
    ProductCardComponent, 
    ButtonComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  
  products = signal<Product[]>([
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
    },
    {
      id: 3,
      title: "Portable Power Bank 20000mAh",
      image: "https://img.freepik.com/free-vector/powerbank-battery-charger-realistic-icons-set-with-black-silver-devices-isolated-vector-illustration_1284-81780.jpg?semt=ais_hybrid&w=740",
      price: 29.99,
      stock: 48
    },
    {
      id: 4,
      title: "Gaming Mouse RGB",
      image: "https://img.freepik.com/free-vector/wireless-computer-mouse-with-led-lights-3d-illustration-cartoon-drawing-tool-playing-games-home-working-office-3d-style-white-background-technology-equipment-concept_778687-694.jpg?semt=ais_hybrid&w=740",
      price: 39.99,
      stock: 34
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle",
      image: "https://img.freepik.com/free-photo/thermal-bottle_1203-7456.jpg?semt=ais_hybrid&w=740",
      price: 15.99,
      stock: 0
    },
    {
      id: 6,
      title: "Laptop Backpack - Waterproof",
      image: "https://img.freepik.com/free-photo/beautiful-backpack-white_1339-7960.jpg?semt=ais_hybrid&w=740",
      price: 54.99,
      stock: 10
    },
    {
      id: 7,
      title: "4K Action Camera",
      image: "https://img.freepik.com/free-vector/handlebar-camera-realistic-illustration_1284-11272.jpg?semt=ais_hybrid&w=740",
      price: 119.99,
      stock: 8
    },
    {
      id: 8,
      title: "Smartphone Tripod Stand",
      image: "https://img.freepik.com/free-vector/isometric-set-photography-video-filming-techniques-blue-round-stands-isolated-vector-illustration_1284-67279.jpg?semt=ais_hybrid&w=740",
      price: 18.49,
      stock: 60
    },
    {
      id: 9,
      title: "Wireless Keyboard and Mouse Combo",
      image: "https://img.freepik.com/free-photo/wireless-mouse-keyboard_1260-15.jpg?semt=ais_hybrid&w=740",
      price: 49.95,
      stock: 20
    },
    {
      id: 10,
      title: "Ceramic Coffee Mug Set (6 pcs)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5ns6rlHfiUld2dLAIYDLa2G-3z1mKMhLZQ&s",
      price: 24.99
      // stock is intentionally omitted
    }
  ]);

  category = "electronics";   // electronics, jewelery, men's clothing, women's clothing 
  url: string = 'https://fakestoreapi.com/products/category/' + this.category;

  async ngOnInit() {
    //await this.fetchCategoryProducts();
    await this.fetchAllProducts();
  }

  async fetchAllProducts() {
    const result = await fetch('https://fakestoreapi.com/products');
    const data = await result.json();
    this.products.set(data);
  }

  async fetchCategoryProducts(cat: string = 'electronics') {
    this.url = 'https://fakestoreapi.com/products/category/' + cat;
    
    const result = await fetch(this.url);
    const data = await result.json();
    this.products.set(data);
  }

}
