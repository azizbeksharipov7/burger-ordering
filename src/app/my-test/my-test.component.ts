import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrl: './my-test.component.scss'
})
export class MyTestComponent implements OnInit{
 ngOnInit(): void {
   this.users.push({name:"Azizbek", age:19})

   setTimeout(()=>{
    this.username+=2;
   }, 2000)
 }
 username='TEST'
 users:{name: string ,age:number}[]=[];

 addUser(user:{name: string ,age:number}){
  this.users.push(user);
 }

 sum(a:number, b:number): number{
  this.addUser({name:'asda', age:a+b})
  return a + b
 }
}
