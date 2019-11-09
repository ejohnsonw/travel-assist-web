import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  @Input() category
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addProduct(p){
    console.log(p)
    this.cartService.addProduct(p);
  }

}
