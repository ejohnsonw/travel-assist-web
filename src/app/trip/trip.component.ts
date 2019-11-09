import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BackendService} from '../backend.service';
import {TripService} from '../trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  bookingId
  constructor(private toastr: ToastrService, private backend: BackendService, public tripService: TripService) {
    this.tripService.loadTrip('d7abcae35ab8')
  }


  ngOnInit() {
    // this.backend.itinerary('d7abcae35ab8').subscribe(data => {
    //   this.trip = data
    //   localStorage.setItem('trip', JSON.stringify(this.trip))
    // }, error => {
    //   this.trip = undefined
    // })



  }

}
