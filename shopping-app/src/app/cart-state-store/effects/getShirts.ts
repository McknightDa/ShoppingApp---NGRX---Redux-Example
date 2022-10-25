import { Injectable } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { getShirts, getShirtSuccess } from "../actions/shirts.actions";
import { exhaustMap, map, EmptyError, catchError, mergeMap } from "rxjs";


@Injectable()

export class getShirtsEffect {

    loadShirts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(getShirts),
        exhaustMap(() => this.dataService.getShirts().pipe(
            map(shirts => getShirtSuccess(shirts))
        ))
    ))
    constructor(private actions$: Actions, private dataService: ProductsService ){}

}