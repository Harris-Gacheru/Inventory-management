import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-cart-items',
  templateUrl: './view-cart-items.component.html',
  styleUrls: ['./view-cart-items.component.css']
})
export class ViewCartItemsComponent implements OnInit {
  cartItems!: any

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']) {
          this.cartService.getCartItems(params['id']).subscribe(
            res => this.cartItems = res.data
          )
        }
      }
    )
  }

}
