import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  textCenter : boolean = false;
  constructor(private data:DataService) { }

  ngOnInit() {
  }

  display(){
    this.textCenter = true;
    this.data.firstClick();
  }
}
