import CART_ACTION_TYPES  from './Cart.type'
const createAction = (type, payload) => ({ type, payload });

export const addCartItem = (cartItems, homeToAdd) => {
    const existingCartItem = cartItems.find(
      
      (cartItem) => cartItem.id == homeToAdd.id
      
    );
  console.log(existingCartItem)
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id == homeToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
  
      );
    }
  
    return [...cartItems, { ...homeToAdd, quantity: 1 }];
  };
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  const remove=(cartItems, removecart)=>{
     const existingCartItem = cartItems.find(
      
      (cartItem) => cartItem.id == removecart.id
      
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== removecart.id);
    }
  
  
    return cartItems.map((cartItem) =>
    cartItem.id == removecart.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  
   ) ;
  
  
  
  }
  
  const clear =(cartItem, clearcart)=>{
     return cartItem.filter(cartItem=>cartItem.id!==clearcart.id)
  }
  
  export const setIsCartOpen = (boolean) =>
   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);







 export const addItemToCart=(cartItems,home)=>{

    const newcart= addCartItem(cartItems, home)
   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newcart )
  
  }


  export const removecartitem=(cartItems,removecart)=>{
    const newcart= remove(cartItems, removecart)
  return  createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newcart )
    }

    export const clearcartitme=(cartItems,clearcart)=>{
      console.log('clear',cartItems)
      console.log('current',clearcart)

    const newcart= clear(cartItems, clearcart)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newcart )
   }

   export const hatao=(cartItems)=>{
    cartItems=cartItems.length?cartItems=[]:cartItems
    return createAction(CART_ACTION_TYPES.SET_CART_NULL,cartItems)
   }