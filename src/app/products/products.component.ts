import { Component } from '@angular/core';
import porductData from '../products.json';
import { ProductsModel } from '../products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products: ProductsModel[] = porductData;
}
