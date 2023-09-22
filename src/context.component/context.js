
import { createContext, useState , useEffect , useReducer} from 'react';
// import {getcategoryanddocument} from '../component/firebase/firebase'
import { type } from '@testing-library/user-event/dist/type';


////////////////////////////////////////////////////////////////////////////////////////

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


export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  addItemToCart: () => {},
  removecartitem:()=>{},
  clearcartitme:()=>{},
  cartcount:0,
  total:0,
  INRtotal:0,
  alerttt:[],
  sata:{},
  CategoryPage:[]

});

const UserReducerfun=(state, action)=>{
   const {type, payload}=action

   switch(type){
     case 'is_cart_on':
      return{
        ...state,
        isCartOpen:payload
      }
      case 'cartItems':
        return{
          ...state,
          cartItems:payload
        }
        case 'cartItem':
          return{
            ...state,
            cartcount:payload,
          }
          case 'cartIte':
          return{
            ...state,
            total:payload,

          }
          case 'cartIt':
            return{
              ...state,
              INRtotal:payload,
  
            }
         

      
   }
}

const INITIAL_STATE={
  isCartOpen:false ,
  cartItems:[],
  cartcount:0,
  total:0,
  INRtotal:0

}

export const CartProvider = ({ children }) => {
  const [{isCartOpen,cartItems, cartcount, total,INRtotal}, dispatch]=useReducer(UserReducerfun, INITIAL_STATE)


  const setIsCartOpen=(bool)=>{
    dispatch({type:'is_cart_on', payload:bool})
  }

  const [alerttt, setalerttt] = useState([]);
  const [sata, setsata]=useState({})

  const [CategoryPage, setCategoryPage]=useState([])



// useEffect(()=>{
//    const aaa = async()=>{
//       const aa= await getcategoryanddocument()
//       setsata(aa)
//    }
//     aaa()
// },[])




const hari=(newcart)=>{
   dispatch({type:"cartItems", payload:newcart})

   const newcartcount=  newcart.reduce((total,cartItems)=>total+cartItems.quantity,0)
   dispatch({type:'cartItem', payload:newcartcount})



  const newtotal = newcart.reduce((total, cartItems)=>total+cartItems.quantity*cartItems.price,0)
  dispatch({type:'cartIte', payload:newtotal})

  const newINRtotal = newcart.reduce((total, cartItems)=>total+cartItems.quantity*cartItems.price*85,0)
  dispatch({type:'cartIt', payload:newINRtotal})

}

  // useEffect(()=>{
  //  const newcartcount = cartItems.reduce((total, cartItems)=>total+cartItems.quantity,0) // first code start 
  //  setcartcount(newcartcount)
  // },[cartItems])

  // useEffect(()=>{
  //   const newtotal = cartItems.reduce((total, cartItems)=>total+cartItems.quantity*cartItems.price,0)
  //   settotal(newtotal)
  //  },[cartItems]) 

   const addItemToCart=(home)=>{
      const newcart= addCartItem(cartItems, home)
      hari(newcart)
    }


    const removecartitem=(removecart)=>{
      const newcart= remove(cartItems, removecart)
      hari(newcart) 
      }

    const clearcartitme=(clearcart)=>{
      const newcart= clear(cartItems, clearcart)
      hari(newcart)       
     }

  const value = { isCartOpen, setIsCartOpen,INRtotal, cartItems, addItemToCart , cartcount,removecartitem,clearcartitme, total, alerttt, setalerttt, sata,  setsata, CategoryPage, setCategoryPage};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};