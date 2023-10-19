import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private route:Router, private ds:DataserviceService){

  }
  usrMng(){
    this.route.navigateByUrl('admin-user-mng')
  }
  pdtMng(){
    this.route.navigateByUrl('admin-product-mng')
  }

  logout(){
    localStorage.removeItem("user")
    this.ds.login.next(false)
    this.route.navigateByUrl("")
  }

}
