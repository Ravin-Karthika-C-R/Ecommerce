import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-admin-product-mng',
  templateUrl: './admin-product-mng.component.html',
  styleUrls: ['./admin-product-mng.component.css']
})
export class AdminProductMngComponent implements OnInit{
  pdata:any=[]
  constructor(private route:Router, private ds:DataserviceService){

  }
  ngOnInit(): void {
    this.ds.getAllProducts().subscribe({
      next:(result:any)=>{
        this.pdata=result.message
      }
    })
  }

  addPage(){
    this.route.navigateByUrl("admin-add-product")
  }

  editPage(id:any){
    this.route.navigateByUrl(`admin-edit-product/${id}`)
  }


  deleteProduct(id:any){
    this.ds.deleteProducts(id).subscribe({
      next:(result:any)=>{
        alert(result.message)

        this.ds.getAllProducts().subscribe({
          next:(result:any)=>{
            this.pdata=result.message
          }
        })

        
      }
    })
  }
}
