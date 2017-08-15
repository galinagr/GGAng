import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {AppService} from './app.service';
import {Model} from './app.model';
import {CartService} from './cart/cart.service';
import {Cart} from './cart/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  ingredients = ['sugar', 'salt', 'pepper'];
  equivalents = ['first', 'second', 'third'];
  nameNew: string;
  ad: string;
  price: number;
  isAvailable: boolean;
  category = Category;
  clickMessage = 'ok!';
  model: Model;
  models: Array<Model>;
  cart: Cart;

  onBuy() {
    this.clickMessage = 'new message';
  }

  constructor(public appService: AppService, public cartService: CartService) {
  }

  ngOnInit() {
    this.model = this.appService.getModel();
    this.models = this.appService.getModels();
    this.cart = this.cartService.getCart();
    this.nameNew = 'New Name';
    this.title = 'FIRST PAGE';
    this.ad = 'AD';
    this.price = 10;
    this.isAvailable = true;
  }
}

