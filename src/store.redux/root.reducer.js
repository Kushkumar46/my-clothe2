import { combineReducers } from "redux";
import {categoriesReducer} from './category/category.reducer'
import {UserReducerfun} from './cart/Cart.reducer'

export const RootReducer=combineReducers({
    categories:categoriesReducer,
    cart:UserReducerfun
})                                                                                                                                                









