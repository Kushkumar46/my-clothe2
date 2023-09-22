import { useContext } from 'react'
import Button from '../button/button.component'
import { CartContext } from '../../context.component/context'
import {  useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store.redux/cart/Cart.action'
import { Selectcartitme } from '../../store.redux/cart/Cart.selector'
import './Product.card.component.scss'


const Product =({key, Product})=>{
    const {imageUrl, name, price,}=Product

    // const {addItemToCart}=useContext(CartContext)

  const dispatch=useDispatch()
  const cartItems=useSelector(Selectcartitme)


    const clickme=()=>dispatch( addItemToCart(cartItems,Product))
 




      

    return(
        <div key={key} className='product-card-container'>
        <img className='img' src={imageUrl} alt={`${imageUrl}`}/> 
        <div className='footer'>
           <span className='name'>{name}</span>
           <span className='price'>${price}</span>
        </div>
        <Button type='button' onClick={()=>clickme(Product)} buttonType={'inverted'}>ADD TO CART</Button>
     </div>
    )
}
export default Product