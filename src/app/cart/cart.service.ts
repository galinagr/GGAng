import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

  constructor() { }

  getCart(): Cart {
    return new Cart(0, 0, 0);
  }

}

