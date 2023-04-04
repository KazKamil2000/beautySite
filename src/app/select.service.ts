import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
selectedProduct = new BehaviorSubject(0)
  constructor() { }
}
