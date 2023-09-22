import { Outlet, Link, } from "react-router-dom"
import { ReactComponent as Crown } from "../all image/crown.svg"
import { Fragment, useContext } from "react"
import Cart_icon from "../Cart-icon/Cart-icon.component"
import Cart_drop from "../Cart-dropdown/Cart-dropdown.component"
import { CartContext } from "../../context.component/context"
import { Usercurrent } from "../../context.component/UserContext"
import { Selectcartitmeisopen } from '../../store.redux/cart/Cart.selector'
import { useSelector } from "react-redux"
import {hatao} from '../../store.redux/cart/Cart.action'
import { useDispatch } from "react-redux"


import { Navparent, Crowns, Nav_links_container, Nav_link_shop, SignIn } from './nav-component.style'
const Navigation = () => {
    // const { isCartOpen, setIsCartOpen } = useContext(CartContext)// this method use for destruct the iscartOpen for access but alsredy have a false value
    // // when both value will be true so it show the last givin value, in this method givin last value cart_drop ,line 25 no use
    // const toggel = () => {
    //     setIsCartOpen(false)
    // }


    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart.cartItems)

  const click=()=>dispatch(hatao(cartItems))

    const { Currentstat } = useContext(Usercurrent)
    const isCartOpen = useSelector(Selectcartitmeisopen)
    return (
        <Fragment>
            <Navparent>
                <Link to='/'>
                    <Crowns>
                        <Crown />
                    </Crowns>
                </Link>
                <Nav_links_container>
                    <Nav_link_shop to='/Shop' >SHOP</Nav_link_shop>
                    {Currentstat ? (<SignIn to='/SignIN' >SIGN OUT</SignIn>) : (<SignIn to='/SignIN' >SIGN IN</SignIn>)}
                    <SignIn to='cal'>click</SignIn>
                    <SignIn onClick={()=>click()}>REMOVE ALL CART</SignIn>

                    <Cart_icon />
                </Nav_links_container>
                {isCartOpen && <Cart_drop />}
            </Navparent>
            <Outlet />
        </Fragment>
    )
}
export default Navigation
