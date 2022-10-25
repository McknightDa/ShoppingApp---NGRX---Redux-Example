import { Product } from "../../classes/product";
import { createReducer, on } from "@ngrx/store";
import {  getFavsSuccess } from "../actions/favorites.actions";
import { addFav } from "../actions/shirts.actions";
// import { addedFav } from "../actions/favorites.actions";


export const initialState: object = {};



export const favReducer = createReducer(
    initialState,
    on(getFavsSuccess, (state, favs) => favs), 
    
    
    on(addFav, (state, payload) => {
        // console.log(state, 'LOGGING THE STATE IN REDUCER')
        const favs: any = {...state};
        const favArr: any = []
        Object.keys(favs).forEach(el => favArr.push(favs[el]))
        favArr.pop()
        favArr.push(payload)
        return favArr
       })
    
)



