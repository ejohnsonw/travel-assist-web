import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.scss']
})
export class BusinesscardComponent implements OnInit {
  @Input() business

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  showCatalog() {
    this.router.navigate(['catalog/' + this.business.publicId])
  }
}
