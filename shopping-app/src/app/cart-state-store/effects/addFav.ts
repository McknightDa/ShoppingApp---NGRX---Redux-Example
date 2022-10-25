import { Injectable } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { addFav, addFavSuccess } from "../actions/shirts.actions";
import { Store } from "@ngrx/store";
import { exhaustMap, map, tap, concatMap } from "rxjs";


@Injectable()

export class addFavsEffect {

    addFav$ = createEffect(() =>
    // this.actions$.pipe(
    //     ofType(addFav),
    //     tap((fav) => console.log(fav, 'is this firing?')),
    //     exhaustMap((data) => this.dataService.addFavorites(data).pipe(
    //         map(favs => addFavSuccess(favs))
    //     ))
    // )
    this.actions$.pipe(
        ofType(addFav),
        concatMap((newItem) => 
        this.dataService.addFavorites(newItem).pipe(
            map((newItem) => addFavSuccess(newItem))
        )
        )
    )
    )
    constructor(private actions$: Actions, private dataService: ProductsService ){}

}