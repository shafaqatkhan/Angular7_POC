import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  h1Style : boolean = false;

  users :Object;
  constructor(private data:DataService) { }

  ngOnInit() {

  }

  firstClick(){
    console.log("Button click succesfully");
    this.h1Style = true;
    this.data.firstClick();
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
