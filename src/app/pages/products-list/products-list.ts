import { Component,signal } from '@angular/core';
import { Products } from '../../models/products.model'
@Component({
  selector: 'app-products-list',
  imports: [],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id)
      {
        <div>{{product.title}}</div>
      }
    </div>
  `,
  styles: ``
})

export class ProductsListComponent {
  products = signal<Products[]>([
    {
      id: 1,
      title: 'Women Floral Summer Dress',
      price: 35.5,
      image: 'https://fakestoreapi.com/img/81XH0e+3H2L._AC_SY879_.jpg',
      stock: 12,
    },
    {
      id: 2,
      title: 'Unisex Running Shoes',
      price: 59.9,
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      stock: 5,
    },
    {
      id: 3,
      title: 'Casual Leather Wallet',
      price: 18.7,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_SY879_.jpg',
      stock: 20,
    },
    {
      id: 4,
      title: 'Wireless Bluetooth Headphones',
      price: 89.0,
      image: 'https://fakestoreapi.com/img/71S+8V+3ZKL._AC_SY879_.jpg',
      stock: 7,
    },
    {
      id: 5,
      title: 'Classic Analog Wrist Watch',
      price: 45.2,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SY879_.jpg',
      stock: 0,
    }

  ])
}
