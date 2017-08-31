import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-beginning',
  template:`
  <p>
  the beginning works inline
  </p>
  ` ,
  styleUrls: ['./the-beginning.component.css']
})
export class TheBeginningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
