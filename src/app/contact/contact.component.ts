import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  inputs: [ "firstname", "lastname" ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
