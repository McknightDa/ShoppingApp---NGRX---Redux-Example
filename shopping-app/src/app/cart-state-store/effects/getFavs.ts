import { Injectable } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { getFavs, getFavsSuccess } from "../actions/favorites.actions";
import { exhaustMap, map } from "rxjs";


@Injectable()

export class getFavsEffect {

    loadFav$ = createEffect(() =>
    this.actions$.pipe(
        ofType(getFavs),
        exhaustMap(() => this.dataService.getFavorites().pipe(
            map(favs => getFavsSuccess(favs))
        ))
    ))
    constructor(private actions$: Actions, private dataService: ProductsService ){}

}