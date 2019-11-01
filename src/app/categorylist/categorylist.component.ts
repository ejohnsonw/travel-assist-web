import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
  @Input() category
  constructor() { }

  ngOnInit() {
  }

}
