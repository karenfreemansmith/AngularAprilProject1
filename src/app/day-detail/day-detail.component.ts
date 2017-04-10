import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-detail',
  inputs: [ 'detail' ],
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit {
  detail="April 01";

  constructor() { }

  ngOnInit() {
  }

}
