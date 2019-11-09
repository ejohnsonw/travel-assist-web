import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {BackendService} from '../backend.service';
import {CartService} from '../cart.service';
import {ToastrService} from 'ngx-toastr';
import {ModalService} from '../_modal';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() catalogs
  @Input() catalog
  @Input() stage
  business

  constructor(private router: Router, private  route: ActivatedRoute, private  backend: BackendService, public cartService: CartService, private toastr: ToastrService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.cartService.reset();
    this.route.paramMap.subscribe(params => {
      if (params.get('publicId')) {
        this.business = JSON.parse(localStorage.getItem('business'))
        this.cartService.business = this.business
        this.backend.catalogsForBusiness(params.get('publicId')).subscribe(data => {
          this.catalogs = data;
          this.catalog = this.catalogs[0];
          this.cartService.catalog = this.catalog
        }, error => {
          //this.webservice.showToast('bottom-right', 'Error', 'Could not retrieve Catalogs', 'danger');
        });
      } else {
        //this.catalogs = undefined;
        this.catalog = this.catalogs[0]
        this.cartService.catalog = this.catalog
        this.business = {}
        localStorage.removeItem("business")
        localStorage.setItem("stage",JSON.stringify(this.stage))
      }
    });
  }

  public createOrder() {
    this.cartService.createOrder()
  }

  declined() {
    this.toastr.info(
      '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">Thanks!!! - for helping us make our flights more sustainable.</span><br><b>Is less food we pack: less weight, less fuel, less CO2  emissions!</b>',
      '',
      {
        timeOut: 10000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-info alert-with-icon',
        positionClass: 'toast-top-center'
      }
    );
  }

  showCart() {
    this.router.navigate(['viewCart'])
  }

}
