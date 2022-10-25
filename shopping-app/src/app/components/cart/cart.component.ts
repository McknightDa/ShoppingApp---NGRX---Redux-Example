import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearCart } from 'src/app/cart-state-store/actions/cart.actions';
import { ProductGroup, selectGroupedCartEntries } from 'src/app/cart-state-store/selectors/cart.selectors';
import { addProduct, removeProduct } from 'src/app/cart-state-store/actions/cart.actions';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartEntries$: Observable<ProductGroup[]>
  carEntries: any = {};
  objectKeys = Object.keys;

  constructor(private store: Store, private cart: ProductsService) {
    this.cartEntries$ = this.store.select(selectGroupedCartEntries)
    
   }

  ngOnInit(): void {
    this.cart.getCart().subscribe(data => {return this.carEntries = data})
  }

  clearCart(){
    this.store.dispatch(clearCart())
  }

  more( entry: ProductGroup){
    this.store.dispatch(addProduct(entry.product))
    //console.log(this.cartEntries$)
  }

  less(entry: ProductGroup){
    this.store.dispatch(removeProduct(entry.product))
  }

}
