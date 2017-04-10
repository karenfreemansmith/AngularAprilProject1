import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css']
})
export class DayDetailComponent implements OnInit {
  detail="";

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.detail=params.detail);
    
  }

  ngOnInit() {
  }

}
