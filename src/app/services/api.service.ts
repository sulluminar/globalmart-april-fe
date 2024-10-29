import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  // method to call getAllProdcucts api
  getAllProductsApi() {
    return this.http.get(`${this.server_url}/all-products`)
  }

  // get product details by id api
  getAllProductsByIdApi(productId:any){
    return this.http.get(`${this.server_url}/get-product/${productId}`)
  }
}
