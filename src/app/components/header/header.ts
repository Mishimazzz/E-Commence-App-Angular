import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
      <span>My store</span>
      <app-primary-button lable="Cart" (btnClicked)="showButtonClicked()"/>
    </div>
  `,
  
  styles: ``
})
export class HeaderComponent {
  showButtonClicked()
  {
    console.log("hello");
  }
}
