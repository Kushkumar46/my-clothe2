import { useContext } from "react";
import { CartContext } from "../../context.component/context";
import Cheak_Item from "../Cheakout-itme/Cheakout.component";
import { useSelector } from "react-redux";
import { Selectcartitme, Selectcarttotal ,SelectcarttotalINR} from "../../store.redux/cart/Cart.selector";
import './Cheakoutpage.scss'


const Cheakoutpage =()=>{
    // const {cartItems, total,INRtotal}=useContext(CartContext)
    
 const cartItems=useSelector(Selectcartitme)
 const total=useSelector(Selectcarttotal)
 const INRtotal=useSelector(SelectcarttotalINR)



    return (
        <div className="checkout-container">
            <div className="checkout-header ">
                <div className="header-block">
           <span>PRODUCT</span>
                </div>
                <div className="header-block">
                <span>DESCRIPTION</span>

                </div>
                <div className="header-block">
                <span>QUANTITY</span>

                </div>
                <div className="header-block">
                <span>PRICE</span>

                </div>
                <div className="header-block">
                <span>REMOVE</span>

                </div>
            </div>
             {cartItems.map((obj)=>{
                return  <Cheak_Item key={obj.id} Cheakoutitme={obj}/>
                })}
                 <div className="totalcontent">
                  <span className="total">TOTAL:INR {INRtotal}</span>
                 <span className="total">TOTAL:$ {total}</span>
                 </div>

 
            </div>
    )
}
export default Cheakoutpage;