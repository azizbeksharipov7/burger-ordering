import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'burger-ordering';
  users=[]
  constructor(private myService: MyserviceService){
    this.getUsers(  )
  }
  getUsers(){
    this.myService.getSmth().subscribe((users:any)=>{
      this.users=users
      console.log(users)
   
    })
  }
}
