import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() catalogs
  @Input() catalog
  business

  constructor(private  route: ActivatedRoute, private  backend: BackendService) {
  }

  ngOnInit() {
    //this.business = JSON.parse(localStorage.getItem('business'))
    this.route.paramMap.subscribe(params => {
      if (params.get('publicId')) {
        this.backend.catalogsForBusiness(params.get('publicId')).subscribe(data => {
          this.catalogs = data;
          this.catalog = this.catalogs[0];
        }, error => {
          //this.webservice.showToast('bottom-right', 'Error', 'Could not retrieve Catalogs', 'danger');
        });
      } else {
        //this.catalogs = undefined;
        this.catalog = this.catalogs[0]
        this.business = {}
      }
    });
  }

}
