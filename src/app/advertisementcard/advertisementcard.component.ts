import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-advertisementcard',
  templateUrl: './advertisementcard.component.html',
  styleUrls: ['./advertisementcard.component.scss']
})
export class AdvertisementcardComponent implements OnInit {
  @Input() ad
  @Input() business
  constructor() {
  }

  ngOnInit() {
  }

  getPhoto(url){
    if(url.startsWith("http")){
      return url;
    }else{
      return "https://quos.s3.amazonaws.com/"+url
    }
  }

}
