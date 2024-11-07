import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  allCartItems: any = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.getAllCartItems()
  }

  getAllCartItems() {
    this.apiService.getAllCartItemsApi().subscribe({
      next: (res) => {
        console.log("1");
        console.log(res)
        this.allCartItems= res;
      },
      error: (res) => {
        console.log(res)
      }
    })
  }
}
