import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  product = input.required<Product>();  // input.requied makes it so that no product = no card generated


}
