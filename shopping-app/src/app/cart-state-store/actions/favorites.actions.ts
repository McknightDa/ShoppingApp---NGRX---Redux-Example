import { Product } from "../../classes/product";
import { createAction, props } from "@ngrx/store";

export const getFavs = createAction('Get Favs');
export const getFavsSuccess = createAction(
    'Get Favs Success',
    props<{favs: Product}>()
)

// export const addedFav = createAction('Add Fav',props<Product>())
