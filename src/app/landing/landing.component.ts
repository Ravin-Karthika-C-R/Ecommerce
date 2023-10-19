import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  products:any=[]

  constructor(private ds:DataserviceService){

  }
ngOnInit(): void {
  this.ds.getAllProducts().subscribe({
    next:(result:any)=>{
      this.products=result.message
    }
  })

}
}