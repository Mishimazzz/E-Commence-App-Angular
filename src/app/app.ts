import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header'
import { ProductsListComponent } from './pages/products-list/products-list'
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductsListComponent],
  template: `
  <app-header />
  <app-products-list />
  `,
  styles: ``,
})

export class App {
  protected readonly title = signal('angular-ecomm');
}
