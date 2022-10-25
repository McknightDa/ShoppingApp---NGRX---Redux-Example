import { Product } from "../../classes/product";
import { createAction, props } from "@ngrx/store";

export const getShirts = createAction('Get Shirts');
export const getShirtSuccess = createAction(
    'Get Shirts Success',
    props<{shirts: Product}>()
)

export const addFav = createAction('Add Fav', props<Product>())

export const addFavSuccess = createAction(
    'Add Fav Success',
    props<Product>()
)
