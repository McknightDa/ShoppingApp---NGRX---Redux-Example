import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {getShirts} from 'src/app/cart-state-store/actions/shirts.actions';
import {getFavs} from 'src/app/cart-state-store/actions/favorites.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';

  constructor(private store: Store){}
  ngOnInit(){
    this.store.dispatch(getShirts());
    this.store.dispatch(getFavs());
  }


}
