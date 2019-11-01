import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BackendService} from '../backend.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-itinerary-trip',
  templateUrl: './itinerary-trip.component.html',
  styleUrls: ['./itinerary-trip.component.scss']
})
export class ItineraryTripComponent implements OnInit {
  @Input() trip;
  @Input() itinerary;
  @Input() idx;

  constructor(private toastr: ToastrService, private backend: BackendService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  }

  shop() {
    this.router.navigate(['/shop/' + this.idx])
  }
}
