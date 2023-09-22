import { CartContext } from '../../context.component/context'
import CartsItem from '../Cartsitme/CartsItem.component'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { useSelector } from 'react-redux'
import { Selectcartitme } from '../../store.redux/cart/Cart.selector'

import {Cart_dropdown_container, Empty_message,Cart_dropdown_strodata} from'./Cart-dropdown.jsx'
const Cart_drop =()=>{

    const cartItems=useSelector(Selectcartitme)

    // const {cartItems }=useContext(CartContext)

    const navi=useNavigate(); // usenavigate  allow us to get navigate function
    const handel =()=>{
        navi('/Cheakout')
       
    } 
    return(
        <Cart_dropdown_container>
            <Cart_dropdown_strodata>
             {cartItems.length ? (cartItems.map((obj)=><CartsItem key={obj.id} cartsitme={obj}/>)):(<Empty_message className='empty-message'>your cart is empety</Empty_message>)}
            </Cart_dropdown_strodata>
            <Button onClick={handel} type='button' buttonType={BUTTON_TYPE_CLASSES.inverted}>GO TO CHEAKOUT</Button>
        </Cart_dropdown_container>
    )
}
export default Cart_drop;