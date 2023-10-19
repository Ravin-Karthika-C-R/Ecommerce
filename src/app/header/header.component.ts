import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { count } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   
  count:any=""
  uid:any=""
  login:any=""
  constructor(private ds:DataserviceService, private route:Router){}

  ngOnInit(): void {

    this.ds.login.subscribe((logData:any)=>{
      this.login=logData
    })

    this.ds.cartCount.subscribe((data:any)=>{
      this.count=data
      // console.log(this.count);
    })
  }

  cart(){
    if(localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.route.navigateByUrl('cart/'+this.uid)

    }
  }

  //wishlist
  toWishlist(){
    if(localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.route.navigateByUrl('wishlist/'+this.uid)

    }
  }

  //logout
  logout(){
    localStorage.removeItem("user")
    this.ds.login.next(false)
    this.route.navigateByUrl("")
  }

}
