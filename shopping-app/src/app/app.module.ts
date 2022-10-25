import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavComponent } from './components/nav/nav.component';
import { ShirtsComponent } from './components/shirts/shirts.component';
import { ProductsService } from './services/products.service';
import { CartComponent } from './components/cart/cart.component';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from './cart-state-store/reducers/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects'
import { getShirtsEffect } from './cart-state-store/effects/getShirts';
import { shirtReducer } from './cart-state-store/reducers/shirts.reducer';
import { getFavsEffect } from './cart-state-store/effects/getFavs';
import { favReducer } from './cart-state-store/reducers/favorites.reducer';
import { addFavsEffect } from './cart-state-store/effects/addFav';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    NavComponent,
    ShirtsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   StoreModule.forRoot({cartEntries: cartReducer, shirts: shirtReducer, favs: favReducer}),
   StoreDevtoolsModule.instrument(),
   EffectsModule.forRoot([getShirtsEffect, getFavsEffect, addFavsEffect])
  ],
  providers: [ProductsService, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
