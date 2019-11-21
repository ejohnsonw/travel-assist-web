import {Component, OnInit} from '@angular/core';
import {TripService} from '../trip.service';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders
  selectedOrder

  constructor(private tripService: TripService, private backend: BackendService) {
  }

  ngOnInit() {
    this.backend.ordersForBooking(this.tripService.getBookingId()).subscribe(data => {
      this.orders = data
    }, error => {
      this.orders = undefined
    })
  }

  selectOrder(order) {
    this.selectedOrder = order;
  }

}
