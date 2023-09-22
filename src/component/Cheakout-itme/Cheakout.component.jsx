import { useContext } from "react";
import { CartContext } from "../../context.component/context";

import { useDispatch } from "react-redux";
import { clearcartitme,addItemToCart,removecartitem } from "../../store.redux/cart/Cart.action";
import { Selectcartitme } from "../../store.redux/cart/Cart.selector";
import { useSelector } from "react-redux";
import './Cheakout.scss'
const Cheak_Item =({Cheakoutitme})=>{
    const {name, key, imageUrl, price, quantity}=Cheakoutitme


    // const {addItemToCart,removecartitem, clearcartitme }=useContext(CartContext)


    const dispatch=useDispatch()
    const cartIt=useSelector((state)=>state.cart.cartItems)


    // const addItemHandler=(Cheakoutitme)=>{
    //     addItemToCart(Cheakoutitme)
    //  }
 
    //  const removeItemHandler=(Cheakoutitme)=>{
    //      removecartitem(Cheakoutitme)
    //  }
    //  const clearItemHandler=(Cheakoutitme)=>dispatch(clearcartitme(Cheakoutitme))
    
    return(

        <div key={key} className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={()=>dispatch(addItemToCart(cartIt,Cheakoutitme))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow'onClick={()=>dispatch(removecartitem(cartIt,Cheakoutitme))} >
          &#10095;
        </div>
      </span>
      <span className='price'> ${price}</span>
      <div className='remove-button' onClick={()=>dispatch(clearcartitme(cartIt,Cheakoutitme))}>
        &#10005;
      </div>
    </div>
  );
};
export default Cheak_Item;