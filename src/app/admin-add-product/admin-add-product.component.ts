import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent {


  constructor(private fb:FormBuilder, private route:Router, private ds:DataserviceService){

  }
  addProductForm=this.fb.group({
    pname:[''],
    description:[''],
    price:[''],
    image:[''],
    rating:[''],
    count:['']
  })

  addNewProduct(){
    const path=this.addProductForm.value

    const bodyData={
      pname:path.pname,
      description:path.description,
      price:path.price,
      image:path.image,
      rating:path.rating,
      count:path.count
    }
    this.ds.addProduct(bodyData).subscribe({
      next:(result:any)=>{
        alert("new product added")
        this.addProductForm.reset()
      }
    })
  }


}
