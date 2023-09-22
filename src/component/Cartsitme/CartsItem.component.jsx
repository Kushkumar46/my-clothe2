import './CartsItem.scss'
import { useDispatch, useSelector } from 'react-redux'
import {addItemToCart} from '../../store.redux/cart/Cart.action'
const CartsItem =({cartsitme})=>{

  

    const {name,key,quantity, imageUrl, price}=cartsitme
    return(
      <div key={key} className="cart-item-container">
        <img src={imageUrl} className="image" alt={`${imageUrl}`}/>
        <div className="item-details"> 
          <span className="name">{name}</span>
          <span>{quantity}+${price}</span>
        </div>
      </div>
    )
}
export default CartsItem;