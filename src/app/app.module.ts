import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppService} from './app.service';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
