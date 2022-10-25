import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/classes/product';
import { addProduct } from 'src/app/cart-state-store/actions/cart.actions';
import { addFav } from 'src/app/cart-state-store/actions/shirts.actions';
import {allShirtProducts} from 'src/app/cart-state-store/selectors/shirts.selectors'
import { favsMap } from 'src/app/cart-state-store/selectors/favorites.selectors'

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent {

  constructor( private store: Store) { 
    this.favoriteItems$.subscribe(val => this.favItems = val)
  }

  allShirt$= this.store.select(allShirtProducts)
  favoriteItems$ = this.store.select(favsMap)
  favItems : any ;
  currentFavs = [];
 

  shirtOption: any;

  addFavorite(data: any){
    let newData = {...data};
    this.store.dispatch(addFav(newData))
    console.log(newData,'fired')
  }

  addToCart(product: Product){
    this.store.dispatch(addProduct(product))
  }

}
