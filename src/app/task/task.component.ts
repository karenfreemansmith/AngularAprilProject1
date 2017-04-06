import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  inputs: [ 'title', 'description', 'status', 'category' ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title = 'Task Title';
  description = 'This is a task I should do today, or maybe tomorrow, because it is really important';
  status = 'not started';
  category = 'testing';

  constructor() { 
    
  }

  ngOnInit() {
  }

}
