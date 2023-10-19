import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit{
pid:any=""
pdata:any=[]
uid:any=""
  constructor(private ar:ActivatedRoute, private ds:DataserviceService, private route:Router){

  }
ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
    this.pid=data.id
    this.ds.getProduct(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
      }
    })
  })
}


addToCart(){
  if(localStorage.getItem("user")){
    //userId, pId
    
      this.uid=localStorage.getItem("user")
      this.ds.addToCart(this.uid,this.pid).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.ds.cartUpdate()
        }
      })
    
    // alert("item added to the cart")
  }
  else{
    alert("Please login first")
    this.route.navigateByUrl('user-login')
  }
}

addToWishlist(){
  if(localStorage.getItem("user")){
    //userId, pId
      this.uid=localStorage.getItem("user")
      this.ds.addToWishlist(this.uid,this.pid).subscribe({
        next:(result:any)=>{
          alert(result.message)
        },
        error:(result:any)=>{
          alert(result.error.message)
        }
      })
    
    // alert("item added to the cart")
  }
  else{
    alert("Please login first")
    this.route.navigateByUrl('user-login')
  }
}

}
