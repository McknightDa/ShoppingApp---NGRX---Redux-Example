import { Product } from "../../classes/product";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface ProductGroup{
    product: Product;
    count: number
}

export const selectCountProducts = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Product[]) =>{
        return state.length
    }
);

export const selectTotalPrice = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Product[])=>{
        let totalPrice = 0;
        state.forEach(p => totalPrice = totalPrice + ~~p.price)
        return totalPrice
    }
)


export const selectGroupedCartEntries = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Product[]) =>{
        // console.log(state)
        // const count: any = {}
        // state.forEach(product =>{
        //     console.log(count[product.id], 'logging count')
        //     if(count[product.id]){
        //         count[product.id] = count[product.id] + 1;
        //     }else{
        //         count[product.id] = 1;
        //     }
        // } )
        // return state.map(product => {
        //     return {product, count: count[product.id]}  
        // })
        let map: Map<number, ProductGroup> = new Map;
        state.forEach(p => {
            if(map.get(p.id)){
                (map.get(p.id) as ProductGroup).count++
            }else{
                map.set(p.id, {product: p, count: 1})
            }
        })
        const sortedMap = new Map([...map.entries()].sort())
        console.log( Array.from(sortedMap.values()))
        return Array.from(sortedMap.values())
    }
)
