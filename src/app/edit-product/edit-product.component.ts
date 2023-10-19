import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  pid:any=""
  pdata:any={}
  constructor(private ar:ActivatedRoute, private ds:DataserviceService, private route:Router){

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      // console.log(data["id"]);
      this.pid=data.id

      this.ds.getProduct(this.pid).subscribe({
        next:(result:any)=>{
          // console.log(result.message);
          this.pdata=result.message
          console.log(this.pdata);
                    
        }
      })
      
      })
      
    }

    editProduct(){
      this.ds.editProducts(this.pid,this.pdata).subscribe({
        next:(result:any)=>{
          alert("Updated")
          alert(result.message)
          this.route.navigateByUrl("admin-product-mng")
        }
      })
    }

}
