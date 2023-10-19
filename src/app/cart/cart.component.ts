import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
userId:any=""
pdatas:any=[]
total:any=0
  constructor(private ds:DataserviceService){}

  ngOnInit(): void {
    this.cartItems()
  }

  cartItems(){
    if(localStorage.getItem("user")){
      this.userId= localStorage.getItem("user")
      this.ds.cartProducts(this.userId).subscribe({
       next:(data:any)=>{
         this.pdatas=data.message
         console.log(this.pdatas);

        this.ds.totalPrice(this.userId).subscribe({
          next:(data:any)=>{
            this.total=data.message
            console.log(this.total);
            
          }
        })
         
         
       }
      })
     }
  }

  increment(pId:any){
    this.ds.increment(pId).subscribe({
      next:(out:any)=>{
        this.cartItems()
      }
    })

  }

  decrement(pId:any){
    this.ds.decrement(pId).subscribe({
      next:(out:any)=>{
        this.cartItems()
      },
      error:(result:any)=>{
        // alert(result.error.message)
        this.remove(pId)
        this.cartItems()
      }
    })
  }

  remove(id:any){
    this.ds.remove(id).subscribe({
      next:(data:any)=>{
        this.cartItems()
        this.ds.cartUpdate()
      }
    })
  }

}
