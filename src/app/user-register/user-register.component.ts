import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  userRegForm=this.fb.group({
    email:[''],
    psw:['']
  })
  constructor(private fb:FormBuilder, private ds:DataserviceService, private route:Router){

  }
  register(){
    this.ds.userRegister(this.userRegForm.value.email,this.userRegForm.value.psw)
    .subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.route.navigateByUrl('user-login')
      },
      error:(result:any)=>{
        alert(result.error.message)
        
      }
    })

  }
}
