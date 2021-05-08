import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
        cartItems: CartItem[] = [];
        totalPrice: number = 0;
        totalQuantity: number = 0;

  constructor(private cartServie: CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {
    this.cartItems = this.cartServie.cartItems;
    this.cartServie.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.cartServie.totalPrice.subscribe(
      data => this.totalQuantity = data
    );

    this.cartServie.computeCartTotals();
  }

}
