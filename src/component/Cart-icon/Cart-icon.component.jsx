import {Cart_icon_parent_conatiner,Cart_con,Cart_icon_count} from './Cart-icon'
import { useContext } from 'react'
import { CartContext } from '../../context.component/context'
import { useSelector, useDispatch } from "react-redux"
import { Selectcartitmeisopen, Selectcartcount } from '../../store.redux/cart/Cart.selector'
import { setIsCartOpen } from '../../store.redux/cart/Cart.action'
const Cart_icon =()=>{
  // const { isCartOpen,setIsCartOpen,cartcount , setalerttt, alerttt}=useContext(CartContext)
const dispatch=useDispatch()
  const cartcount=useSelector(Selectcartcount )
  console.log(cartcount)
  const isCartOpen=useSelector(Selectcartitmeisopen )




  const toggel=()=>{
    if(cartcount==0 && isCartOpen==true){
      dispatch(setIsCartOpen(!isCartOpen))
      
    }else if(cartcount==0 ){
      alert('PLZ ADD TO CART')
    }else{
      dispatch(setIsCartOpen(!isCartOpen))
    }
  }
  



  // const toggel=()=>{
  //     if(cartcount === 0 && isCartOpen===true){
  //       setIsCartOpen(false)
  //     }else if (cartcount === 0 ){
  //       setIsCartOpen(alert("PLZ ADD TO CART"))
  //     }else{
  //       setIsCartOpen(!isCartOpen)
  //     } 
  // }
 // invers give value
  // toggle is a invers function if value have so out the interface and value not have so it will give on iterface line 14 no



  
    return(
       <Cart_icon_parent_conatiner onClick={toggel}> 
        <Cart_con className='Cart-icon'/>
        <Cart_icon_count>{cartcount}</Cart_icon_count>
       </Cart_icon_parent_conatiner>
    )
}
export default Cart_icon;

