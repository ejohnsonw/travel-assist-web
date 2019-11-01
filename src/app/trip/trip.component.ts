import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  constructor(private toastr: ToastrService, private backend: BackendService) {

  }


  trip

  ngOnInit() {
    this.backend.itinerary('d7abcae35ab8').subscribe(data => {
      this.trip = data
      localStorage.setItem('trip', JSON.stringify(this.trip))
    }, error => {
      this.trip = undefined
    })

  }

}
