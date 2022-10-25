import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Store } from '@ngrx/store';
import {allFavProducts} from 'src/app/cart-state-store/selectors/favorites.selectors'
import { Observable } from 'rxjs';
import {getFavs} from 'src/app/cart-state-store/actions/favorites.actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private getProducts: ProductsService, private store: Store) {
    this.allFav$ = this.store.select(allFavProducts)
   }

  allFav$: Observable<any>
  favoriteList: any;
  contentDisplayToggle: boolean = true;


  ngOnInit(): void {
    //this.getFavs()
    // this.store.dispatch(getFavs())
  }

  // getFavs(){
  //   return this.getProducts.getFavorites().subscribe((data)=>{
  //     if(data === null || undefined){
  //       this.contentDisplayToggle = false
  //     } else {
  //       this.favoriteList = Object.keys(data).map(key=>{
  //         return {...data[key], uuid:key }
  //       })
  //     }
  //   })
  // }

  removeFav(id: any){
    this.getProducts.deleteFav(id).subscribe((val)=>{
      console.log(val)
     // this.getFavs();
    })
  }



}
