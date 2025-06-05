import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { CartService } from '../../services/cart.service';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {

  cartService = inject(CartService);
  item = input.required<Product>();

}
