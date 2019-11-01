import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BackendService} from '../backend.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private toastr: ToastrService, private backend: BackendService, private route: ActivatedRoute) {

  }

  trip
  services
  tripIdx
  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      if (params.get('tripIdx')) {
      this.tripIdx = params.get('tripIdx');
        this.backend.stages('d7abcae35ab8').subscribe(data => {
          this.trip = data
        }, error => {
          this.trip = undefined
        })
      } else {
        this.trip = undefined;
      }
    });


  }

}
