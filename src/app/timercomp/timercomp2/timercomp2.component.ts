import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timercomp2',
  templateUrl: './timercomp2.component.html',
  styleUrls: ['./timercomp2.component.css']
})
export class Timercomp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 start(limit:any){
   let num=Number(limit);
   console.log(num)
 }
}
