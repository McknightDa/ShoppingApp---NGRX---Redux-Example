import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { ShirtsComponent } from './components/shirts/shirts.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
{path: "", redirectTo: "/home", pathMatch: "full"},
{path: "home", component: HomeComponent},
{path: "shirts", component: ShirtsComponent},
{path: "favorites", component: FavoritesComponent},
{path: "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
