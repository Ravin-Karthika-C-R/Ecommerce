import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  uid:any
  cartCount=new BehaviorSubject(0)
  login=new BehaviorSubject(false)

baseUrl="http://localhost:5002"

constructor(private http:HttpClient) {
  this.cartUpdate()
  this.header()
 }
//for wishlist
header(){
  if(localStorage.getItem("user")){
    this.login.next(true)
  }
}

 //update cart count
 cartUpdate(){
  if(localStorage.getItem("user")){
    this.uid =localStorage.getItem("user")
    this.http.get(`${this.baseUrl}/cart-count/${this.uid}`).subscribe({
      next:(result:any)=>{
        this.cartCount.next(result.message)
      }
    })
  }
 }

  //adminlogin api
  adminLogin(uname:any,psw:any){
    const body={uname,psw}
    return this.http.post(`${this.baseUrl}/admin/login`,body)
  }

  addProduct(body:any){
    return this.http.post(`${this.baseUrl}/admin/add-product`,body)
  }

  getAllProducts(){
    return this.http.get(`${this.baseUrl}/products-access`)
  }

  editProducts(id:any, bodyData:any){
    return this.http.put(`${this.baseUrl}/product-update/${id}`,bodyData)
  }

  //api to get single product
  getProduct(id: any){
    return this.http.get(`${this.baseUrl}/single-product/${id}`)
  }

  deleteProducts(id:any){
    return this.http.delete(`${this.baseUrl}/product-delete/${id}`)
  }

  //user register
  userRegister(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseUrl}/user-signup`,body)
  }

  //api to user login

  userLogin(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseUrl}/user-login`,body)

  }
  //api for addtocart
  addToCart(userId:any , pId :any ){
    const body ={userId,pId}
    return this.http.post(`${this.baseUrl}/addtocart`,body)
  }

  //api to get cartitems
  cartProducts(userId:any){
    return this.http.get(`${this.baseUrl}/cart-items/${userId}`)
  }

 // api for  cart totalPrice
  totalPrice(id:any){
    return this.http.get(`${this.baseUrl}/price-total/${id}`)
  }

  //increment

  increment(pId:any){
    return this.http.get(`${this.baseUrl}/quantity-update-inc/${pId}`)
  }

   //decrement

   decrement(pId:any){
    return this.http.get(`${this.baseUrl}/quantity-update-dec/${pId}`)
  }

  //remove
  remove(id:any){
    return this.http.delete(`${this.baseUrl}/remove-cart/${id}`)
  }

  //wishlist
  addToWishlist(userId:any,pId:any){
    const body={
      userId,pId
    }
    return this.http.post(`${this.baseUrl}/addtowishlist`,body)
  }

    //api to get wishlist items
    wishListProducts(userId:any){
      return this.http.get(`${this.baseUrl}/wishlist-items/${userId}`)
    }

//removewishlist

  removeWishlist(id:any){
    return this.http.delete(`${this.baseUrl}/remove-wishlist/${id}`)

  }
//get all users
getAllUsers(){
  return this.http.get(`${this.baseUrl}/users-access`)
}

//user delete
deleteUser(id:any){
  return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
}


}
