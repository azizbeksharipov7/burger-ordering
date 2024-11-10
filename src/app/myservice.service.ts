import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  getSmth(){
    return this.http.get<any>('https://reqres.in/api/users?page=2')
  }
}
