import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    PrimaryButtonComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartService = inject(CartService);

  //title = 'My Angular eCommerce App';
  title = signal('My Angular eCommerce App');

  showButtonClicked()
  {
    console.log("Clicked");
  }

}
