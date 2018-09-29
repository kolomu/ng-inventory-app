import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent implements OnInit {
  @Input() productList: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
   }

  ngOnInit() { }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.productSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    // only make a comparison if a valid product is given this method AND
    // this.currentProduct is a valid product.
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
