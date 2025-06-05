import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //title = 'My Angular eCommerce App';
  title = signal('My Angular eCommerce App');

  showButtonClicked()
  {
    console.log("Clicked");
  }

}
