import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getAllProductsByIdApi(productId: any) {
    return this.http.get(`${this.server_url}/get-product/${productId}`)
  }
  // user register
  userRegisterApi(data: any) {
    return this.http.post(`${this.server_url}/user-register`, data)
  }

  //login user
  userLoginApi(data: any) {
    return this.http.post(`${this.server_url}/user-login`, data)
  }

  addToWishList(data: any) {
    return this.http.post(`${this.server_url}/add-wishlist`, data, this.addTokenToHeader())
  }
  // common function to create a custom header
  addTokenToHeader() {
    // 1) create an object of class HttHeaders
    let headers = new HttpHeaders();
    const token = sessionStorage.getItem("token");
    if (token) {
      headers.append('Authorization', `Bearer ${token}`)
    }
    return { headers }
  }
}
