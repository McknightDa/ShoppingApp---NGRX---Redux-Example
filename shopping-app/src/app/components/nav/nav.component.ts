import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts, selectTotalPrice } from 'src/app/cart-state-store/selectors/cart.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private store: Store) { 
    this.countProduct$ = this.store.select(selectCountProducts)
    this.totalPrice$ = this.store.select(selectTotalPrice)
  }

  countProduct$: Observable<number>;
  totalPrice$: Observable<number>

  ngOnInit(): void {
  }

}

