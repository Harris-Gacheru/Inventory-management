import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-listings',
  templateUrl: './orders-listings.component.html',
  styleUrls: ['./orders-listings.component.css']
})
export class OrdersListingsComponent implements OnInit {
  orders: any[] = []

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe(
      res => this.orders = res.data
    )
  }

}
