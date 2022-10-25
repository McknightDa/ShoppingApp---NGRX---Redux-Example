import { Injectable } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { addFav, addFavSuccess } from "../actions/shirts.actions";


import { exhaustMap, map, tap, concatMap } from "rxjs";


@Injectable()

export class addFavsEffect {

    addFav$ = createEffect(() =>
    this.actions$.pipe(
        ofType(addFav),
        concatMap((newItem) => 
        this.dataService.addFavorites(newItem).pipe(
            map((uuid) => addFavSuccess({...newItem, uuid}))
        )
        )
    )
    )



    constructor(private actions$: Actions, private dataService: ProductsService ){}

}