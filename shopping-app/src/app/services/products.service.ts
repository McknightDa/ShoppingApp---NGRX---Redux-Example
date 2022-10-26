import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../classes/product';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Define Api Details:
  shirtsUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Shirts.json'

  favoritesUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Favorites.json'

  deleteUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Favorites/'

  cartUrl = 'https://shopping-app-132c5-default-rtdb.firebaseio.com/Cart.json'

  jsonEXT = '.json'



  constructor(private http: HttpClient) {  }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  // getShirts(): Observable<any>{
  //   return this.http.get<any>(
  //     this.shirtsUrl
  //     ).pipe(
  //       map((data) => {
  //       return data
  //     }))
  // }

  getShirts(): Observable<any>{
    return this.http.get<Product>(this.shirtsUrl)
  }


  getFavorites(): Observable<any>{
    return this.http.get<Product>(this.favoritesUrl)
  }

  addFavorites(newItem: any){
    return this.http.post<any>(this.favoritesUrl, newItem)
  }
  
  deleteFav(id:any){
    const url = `${this.deleteUrl}${id}${this.jsonEXT}`
    return this.http.delete(url)
  }

  getCart(): Observable<any>{
    return this.http.get<Cart>(this.cartUrl)
  }


}
