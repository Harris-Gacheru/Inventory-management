import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCart() {
    return this.http.get<any>(`${API_URL}/cart`)
  }

  getCartItems(id: string) {
    return this.http.get<any>(`${API_URL}/cart/items/${id}`)
  }
}
