import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  firstClick(){
    return console.log("Angular Service Called");
  };

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
