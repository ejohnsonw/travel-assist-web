import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order: {}
  catalog
  business
  itinerary
  orderResult
  constructor(private backend: BackendService) {
    this.reset()
  }

  public reset() {
    this.order = {}
    this.order['items'] = []
  }

  public addProduct(product) {
    if (isNullOrUndefined(product.quantity)) {
      product.quantity = 1
    }
    let oi = {}
    oi['product'] = product;
    oi['quantity'] = product.quantity
    oi['price'] = product.price
    this.order['items'].push(oi);
  }

  public createOrder() {
    let trip = JSON.parse(localStorage.getItem('trip'))
    let stage = JSON.parse(localStorage.getItem('stage'))
    let business = JSON.parse(localStorage.getItem('business'))
    this.order['catalog_id'] = this.catalog.id
    if (!isNullOrUndefined(business)) {
      this.order['business_publicId'] = business.publicId;
    } else {
      this.order['business_publicId'] = this.catalog.businessId;
    }
    let p = trip['passengers'][0]
    this.order['orderName'] = p['firstName'] + ' ' + p['lastName']
    this.order['orderPhone'] = p.phone
    this.order['orderEmail'] = p.email

    if (!isNullOrUndefined(stage.arrivingFlight)) {
      this.order['delivery_info'] = 'Arriving on Flight: ' + stage.arrivingFlight + ' @ ' + stage.arrivalDateTime + ' \nAllergies: ' + p['food']['allergies']
      this.order['watchObject'] = stage.arrivingFlight
      this.order['deferredTo'] = stage.arrivalDateTime
    } else {
      this.order['delivery_info'] = 'Booking ID:' + trip['booking']['bookingId'] + '\nSeat: Unassigned\nAllergies: ' + p['food']['allergies']
    }

  }

  public getOrderInfo() {
    this.createOrder()
    return this.order
  }

  public getOrder() {
    return this.order
  }

  public isEmpty() {
    return this.order['items'].lenght == 0
  }

  public orderTotal() {
    let total = 0;
    this.order['items'].forEach(function (p) {
      total += p.quantity * (p.price / 100)
    })
    return total;
  }

  public purchase(){


  }

}
