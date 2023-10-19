import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  userForm = this.fb.group({
    email: [''],
    psw: ['']
  })
  constructor(private ds:DataserviceService, private route:Router, private fb:FormBuilder){}

  ulogin(){
    this.ds.userLogin(this.userForm.value.email,this.userForm.value.psw)
    .subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("user",result._id)
        // console.log(result.message);
        this.route.navigateByUrl("")
        this.ds.header()
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.route.navigateByUrl("user-register")
      }
    })
  }
}
