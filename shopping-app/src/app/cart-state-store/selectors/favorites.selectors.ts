import { Product } from "../../classes/product";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const allFavProducts = createSelector(
    createFeatureSelector('favs'),
    (state: Product[]) =>{
        const favOption = {...state}
        const favArray: Product[] = [];
        Object.keys(favOption).forEach(key =>{
            favArray.push(favOption[key])
        })
        favArray.pop()
        return favArray
    }
);
export const favsMap = createSelector(
    createFeatureSelector('favs'),
    (state: any) =>  Object.values(state).reduce(
        (acc :{}, curr: any) => { 
            if(typeof curr === 'object'){
                acc[curr.firebaseId]= curr;
            }
         return acc;
        },{})
)