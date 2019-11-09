import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  trip

  constructor(private backend: BackendService) {

  }

  loadTrip(bookingId) {


    this.backend.itinerary('d7abcae35ab8').subscribe(data => {
      this.trip = data
      localStorage.setItem('trip', JSON.stringify(this.trip))
    }, error => {
      this.trip = undefined
    })

  }

  getBookingId() {
    return this.trip.booking.bookingId
  }
}
