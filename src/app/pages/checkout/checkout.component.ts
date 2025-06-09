import { Component, computed, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { Customer } from '../../models/customer.model';
import { Payment } from '../../models/payment.model';
import { CartService } from '../../services/cart.service';
import { environment } from '../../../environments/environment.development';
import { PaymentComponent } from "./payment/payment.component";

@Component({
  selector: 'app-checkout',
  imports: [
    FormsModule,
    PrimaryButtonComponent,
    PaymentComponent
],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  
  customer: Customer = new Customer();
  payment: Payment = new Payment();

  cartService = inject(CartService);
  totalItemCount = this.cartService.cart().length;
  cartItems = this.cartService.cart();
  stripe = null;

  ngOnInit(): void {
    this.invokeStripe();
  }

  total = computed(() => {
    let total = 0;

    for(const item of this.cartService.cart()) {
      total += item.price;
    }

    return total;
  });

  // Stripe Invocation
  invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');
    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://js.stripe.com/v3/';
    script.onload = () => {
      this.stripe = (<any>window).Stripe(environment.STRIPE_KEY);
     };
     window.document.body.appendChild(script);
    }
  }

}
