import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="inventory-app">
    <products-list
      [productList]="products"
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Some Shoes',
        '/assets/images/products/shoe.jpg',
        ['Men', 'Shoes', 'Shoes'],
        109.99
      ),
      new Product(
        'NEATOJACKET',
        'Some Jackets',
        '/assets/images/products/jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99
      ),
      new Product(
        'NICEHAT',
        'Great and Nice Hat',
        '/assets/images/products/hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      )
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
