import { Product } from "../../classes/product";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const allShirtProducts = createSelector(
    createFeatureSelector('shirts'),
    (state: Product[]) =>{
        const shirtOption = {...state}
        const shirtsArray: Product[] = [];
        Object.keys(shirtOption).forEach(key =>{
            shirtsArray.push({...shirtOption[key], firebaseId: key})
        })
        shirtsArray.pop()
        return shirtsArray
    }
);