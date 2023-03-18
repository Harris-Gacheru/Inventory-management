import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = []
  orders: any[] = []
  cart: any[] = []
  
  constructor(private productsService: ProductsService, private ordersService: OrdersService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res => {this.products = res.data}
    )

    this.ordersService.getOrders().subscribe(
      res => {this.orders = res.data}
    )

    this.cartService.getCart().subscribe(
      res => {this.cart = res.data}
    )
  }

}
