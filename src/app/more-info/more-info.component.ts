import { Component } from '@angular/core';
import porductData from '../products.json';
import { ProductsModel } from '../products.model';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent {
  products: ProductsModel[] = porductData;
}
