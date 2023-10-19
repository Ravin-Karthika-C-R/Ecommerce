import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  userId:any=''
  pdatas:any=''

  constructor(private ds:DataserviceService){}

  ngOnInit(): void {
    this.wishlist() 
  }

  wishlist(){
    if(localStorage.getItem("user")){
      this.userId= localStorage.getItem("user")
      this.ds.wishListProducts(this.userId).subscribe({
       next:(data:any)=>{
         this.pdatas=data.message
         console.log(this.pdatas);
       }
      })
     }
  }

  addtoCart(pId:any, id:any){

    this.ds.addToCart(this.userId,pId).subscribe({
      next:(data:any)=>{
          alert(data.message)
          this.ds.cartUpdate()
          this.remove(id)
        }
    })
  }

  remove(pid:any){
    this.ds.removeWishlist(pid).subscribe({
      next:(data:any)=>{
          alert(data.message)
          this.wishlist()
        }
    })
  }

}
