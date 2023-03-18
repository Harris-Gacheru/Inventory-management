import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<any>(`${API_URL}/orders`)
  }

  getOrder(id: string) {
    return this.http.get<any>(`${API_URL}/orders/${id}`)
  }
}
