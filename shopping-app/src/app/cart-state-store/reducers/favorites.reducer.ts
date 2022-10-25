import { createReducer, on } from "@ngrx/store";
import {  getFavsSuccess } from "../actions/favorites.actions";
import { addFavSuccess } from "../actions/shirts.actions";

export const initialState: object = {};



export const favReducer = createReducer(
    initialState,
    on(getFavsSuccess, (state, favs) => {
        return favs
    }), 
    on(addFavSuccess, (state, favs) => {
        //hacky but until i know more this is what it is
        const payload  = {...favs}
        delete payload.uuid
        return {...state, [favs.uuid.name]:payload}
    })
)



