// import Button from "../button/button.component"

// import { CartContext } from "../../context.component/context"
// import { useContext } from "react"
// const Pre =()=>{
//     const {sata, addItemToCart}=useContext(CartContext)

//     const clickme=(objj)=>{
//         addItemToCart(objj)
//       }



//     return(
//     <div>
//         {   sata.map((objj)=>{
//          const {id,name,imageUrl, price}=objj // this method use destruct from home 
//          return <div key={id} className='product-card-container'>
//             <img className='img' src={imageUrl} alt={`${imageUrl}`}/> 
//             <div className='footer'>
//                <span className='name'>{name}</span>
//                <span className='price'>${price}</span>
//             </div>
//             <Button type='button' onClick={()=>clickme(objj)} buttonType={'inverted'}>ADD TO CART</Button>
//          </div>
//        })}
//     </div>

   
//     )
// }
// export default Pre;

