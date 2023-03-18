import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  addProduct(product: FormData) {
    return this.http.post<any>(`${API_URL}/products`, product)
  }

  getProducts() {
    return this.http.get<any>(`${API_URL}/products`)
  }

  getProduct(id: string) {
    return this.http.get<any>(`${API_URL}/products/${id}`)
  }

  updateProduct(id: string, product: FormData) {
    return this.http.patch<any>(`${API_URL}/products/${id}`, product)
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(`${API_URL}/products/${id}`)
  }
}
