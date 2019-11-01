import {Component, Input, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stagecard',
  templateUrl: './stagecard.component.html',
  styleUrls: ['./stagecard.component.scss']
})
export class StagecardComponent implements OnInit {
  @Input() stage
  services;
  criteria
  businesses;
  catalogs

  constructor(private backend: BackendService, private router: Router) {
  }

  getPhoto(url) {
    if (url.startsWith('http')) {
      return url;
    } else {
      return 'https://quos.s3.amazonaws.com/' + url
    }
  }

  ngOnInit() {
    if (this.stage.typeId == 3) {
      this.getBusiness();
    }

    if (this.stage.typeId == 4) {
      this.getCatalog();
    }

    // this.businesses = []
    // this.businesses.push({})
    // this.businesses.push({})
    // this.businesses.push({})
    // this.businesses.push({})
    //
    // this.businesses.push({})
    // this.businesses.push({})
    // this.businesses.push({})
  }

  getServiceClasses() {
    // this.backend.servicesForStages(this.stage.typeId).subscribe(data => {
    //   this.services = data
    // }, error => {
    //   this.services = undefined
    // })
    this.getBusiness()
  }


  getBusiness() {
    let request = {}
    request['venueId'] = this.stage.objectKey
    request['criteria'] = this.criteria
    this.backend.businessSearchByVenue(request).subscribe(data => {
      this.businesses = data
    }, error => {
      this.businesses = undefined
    })
  }

  getCatalog() {
    let request = {}
    request['catalogName'] = this.stage.objectKey

    request['criteria'] = this.criteria
    this.backend.catalogsByName(request).subscribe(data => {
      this.catalogs = data
    }, error => {
      this.catalogs = undefined
    })
  }

  showCatalog(business) {
    localStorage.setItem('business', JSON.stringify(business))
    this.router.navigate(['catalog/' + business.publicId])
  }


}
