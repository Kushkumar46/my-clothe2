import {createSelector} from 'reselect'

const Selectcart=(state)=>state.cart;

export const Selectcartitme=createSelector(
    [Selectcart],
    (cart)=>cart.cartItems
);

export const Selectcartitmeisopen=createSelector(
    [Selectcart],
    (cart)=>cart.isCartOpen
);

export const Selectcartcount=createSelector(
    [Selectcartitme],
    (cartItems)=>cartItems.reduce((total,cartItems)=>total+cartItems.quantity,0)
);

export const Selectcarttotal=createSelector(
    [Selectcartitme],
    (cartItems)=>cartItems.reduce((total, cartItems)=>total+cartItems.quantity*cartItems.price,0)
);
export const SelectcarttotalINR=createSelector(
    [Selectcartitme],
    (cartItems)=>cartItems.reduce((total, cartItems)=>total+cartItems.quantity*cartItems.price*85,0)
);