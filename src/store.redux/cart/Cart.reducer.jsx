import CART_ACTION_TYPES from './Cart.type'
const CARTINITIAL_STATE={
    isCartOpen:false ,
    cartItems:[],
   
    
  
  }
  export const UserReducerfun=(state=CARTINITIAL_STATE, action={})=>{
    const {type, payload}=action
 
    switch(type){
      case CART_ACTION_TYPES.SET_CART_ITEMS:
       return{
         ...state,
         cartItems:payload
       }
       case CART_ACTION_TYPES.SET_IS_CART_OPEN:
        return{
          ...state,
          isCartOpen:payload
        }
        case CART_ACTION_TYPES.SET_CART_NULL:
        return{
          ...state,
          cartItems:payload
        }
        
        default:
            return state
      
      
       
    }
 }  