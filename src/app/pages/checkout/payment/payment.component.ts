import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { environment } from '../../../../environments/environment.development';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-payment',
  imports: [
    FormsModule,
    NgIf,
    ButtonComponent
],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  ngOnInit(): void {
    this.invokeStripe();
  }

  stripeAmount: number = 0;
  isLoading: boolean = false;
  paymentHandler: any = null;
  stripeAPIKey: any = environment.STRIPE_KEY;

  makePayment(amount: any) {
    if(this.stripeAmount <= 0) {
      alert("Please enter a valid amount!")
      return;
    }

    // Make the payment
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'ItSolutionStuff.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  } 
    
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
    
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
  
      window.document.body.appendChild(script);
    }
  }

}
