import { Component } from '@angular/core';
import porductData from '../products.json';
import { ProductsModel } from '../products.model';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products: ProductsModel[] = porductData;

constructor(private selectService: SelectService){}

moreInfo(i: number){
  this.selectService.selectedProduct.next(i);
}

}
