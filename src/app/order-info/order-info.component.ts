import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  orderInfo

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.orderInfo = this.cartService.getOrderInfo()
  }

}
