import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  inputs: [ 'day' ],
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  day = "00";
  
  constructor() { }

  ngOnInit() {
  }

}
