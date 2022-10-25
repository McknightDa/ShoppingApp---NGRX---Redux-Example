import { Product } from "../../classes/product";
import { createReducer, on } from "@ngrx/store";
import {  getFavsSuccess } from "../actions/favorites.actions";

export const initialState: object = {};



export const favReducer = createReducer(
    initialState,
    on(getFavsSuccess, (state, favs) => favs), 
)



