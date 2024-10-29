import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  constructor(private apiService: ApiService, private spinner: NgxSpinnerService) { }
  allProducts: any = [];
  ngOnInit() {
    this.apiService.getAllProductsApi().subscribe({
      next: (res) => {
        console.log("All Products");
        console.log(res)
        this.allProducts = res;
      },
      error: (res) => {
        console.log(res)
      }
    })
  }

  addToWishList(product:any){
    alert(product)
  }
  addToCart(product:any){
    alert(product)
  }
}
