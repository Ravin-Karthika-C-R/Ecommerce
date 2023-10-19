import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-admin-user-mng',
  templateUrl: './admin-user-mng.component.html',
  styleUrls: ['./admin-user-mng.component.css']
})
export class AdminUserMngComponent implements OnInit{
users:any=[]
  constructor(private ds:DataserviceService){}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.ds.getAllUsers().subscribe({
      next:(result:any)=>{
        this.users=result.message
      }
    })
  }

  deleteUser(id:any){
    this.ds.deleteUser(id).subscribe({
      next:(result:any)=>{
        this.getUsers()
      }
    })
  }

}
