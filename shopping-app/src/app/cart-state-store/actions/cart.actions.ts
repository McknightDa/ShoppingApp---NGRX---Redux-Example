import { Product } from "../../classes/product";
import { createAction, props } from "@ngrx/store";
import { Cart } from "src/app/classes/cart";

export const addProduct = createAction('Add Product', props<Product>());

export const removeProduct = createAction('Remove Product', props<Product>());

export const clearCart = createAction('Clear Cart');
