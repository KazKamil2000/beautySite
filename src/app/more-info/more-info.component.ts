import { Component, OnInit } from '@angular/core';
import porductData from '../products.json';
import { ProductsModel } from '../products.model';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit{
  products: ProductsModel[] = porductData;
  selectedProduct!: number;


  constructor(private selectService: SelectService){}

  ngOnInit() {
     this.selectService.selectedProduct.subscribe((i) => {
        this.selectedProduct = i;
      });
  }
}
