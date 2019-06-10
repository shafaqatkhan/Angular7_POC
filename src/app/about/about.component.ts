import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dynamicStyle : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  firstClick(){
    this.dynamicStyle = true;
  }
}
