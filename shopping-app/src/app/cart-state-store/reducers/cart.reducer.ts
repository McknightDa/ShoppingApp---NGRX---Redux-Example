import { Product } from "../../classes/product";
import { createReducer, on } from "@ngrx/store";
import { addProduct, clearCart, removeProduct } from "../actions/cart.actions";

export const initialCartEntries: Product[] = [];


export const cartReducer = createReducer(
    initialCartEntries,
    on(clearCart, _=>[]),

    on(addProduct, (entries, product) =>{
        // console.log(entries, "this is the entries")
        // console.log(product, "this is the product")
        const entriesClone: Product[] = [...entries];
        entriesClone.push(product)
        return entriesClone
    }),

    on(removeProduct, (entries, product) =>{
        const entriesClone: Product[] = [...entries];
        const found = entriesClone.find(e => e.id == product.id)
        console.log(found, 'logging found')
        if(found){
            entriesClone.splice(entriesClone.indexOf(found), 1)
        }
        return entriesClone
    })

)