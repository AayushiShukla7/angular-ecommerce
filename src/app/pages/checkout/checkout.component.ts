import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { Customer } from '../../models/customer.model';
import { Payment } from '../../models/payment.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [
    FormsModule,
    PrimaryButtonComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  customer: Customer = new Customer();
  payment: Payment = new Payment();

  cartService = inject(CartService);
  totalItemCount = this.cartService.cart().length;

  total = computed(() => {
    let total = 0;

    for(const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  });

}
