import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/classes/product';
import { addProduct } from 'src/app/cart-state-store/actions/cart.actions';
import { addFav } from 'src/app/cart-state-store/actions/shirts.actions';
import { Observable } from 'rxjs';
import {allShirtProducts} from 'src/app/cart-state-store/selectors/shirts.selectors'
import {allFavProducts} from 'src/app/cart-state-store/selectors/favorites.selectors'
import { getFavs } from 'src/app/cart-state-store/actions/favorites.actions';
//import { favsMap } from 'src/app/cart-state-store/selectors/favorites.selectors'

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

  constructor(private getProducts: ProductsService, private store: Store) { 
    //this.allShirt$ = this.store.select(allShirtProducts)
    this.allShirt$ = this.store.pipe(select(allShirtProducts))
    this.favoriteItems$ = this.store.select(allFavProducts)
  }

  allShirt$: Observable<any>
  favoriteItems$:Observable<any>
  currentFavs = [];
 

  shirtOption: any;
  ngOnInit(): void {
   //this.store.dispatch(getShirts())
   // this.getAllShirts();
   console.log(this.allShirt$, 'Logging this shit...')
  }

  //ngOnUpdate()

  getCurrentFavs(){
    
  }
  addFavorite(data: any){
    let newData = {...data};
    this.store.dispatch(addFav(newData))
    console.log(newData,'fired')
  }

  checkFav(id: any){
    console.log(id)
    return this.favoriteItems$.subscribe((val) =>{ 
      if(val.findIndex((item: any) => item.firebaseId === id)){
        return console.log(false)
      }else{
        return console.log(true)
      }
    })
    
  }

  addToCart(product: Product){
    this.store.dispatch(addProduct(product))
  }

}
