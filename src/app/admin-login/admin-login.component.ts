import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  adminForm = this.fb.group({
    auname: [''],
    apsw: ['']
  })
  constructor(private fb: FormBuilder, private route: Router, private ds: DataserviceService) { }
  adminlogin() {
    this.ds.adminLogin(this.adminForm.value.auname, this.adminForm.value.apsw).subscribe({
      next: (result: any) => {
        console.log(result.message); 
        // alert(result.message)
        this.route.navigateByUrl('admin-home')

      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })

  }

}
