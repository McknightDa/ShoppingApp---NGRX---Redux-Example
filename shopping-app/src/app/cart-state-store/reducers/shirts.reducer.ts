import { Product } from "../../classes/product";
import { createReducer, on } from "@ngrx/store";
import {  getShirtSuccess } from "../actions/shirts.actions";


export const initialState: object = {};



export const shirtReducer = createReducer(
    initialState,
    on(getShirtSuccess, (state, shirts) => shirts),
)





