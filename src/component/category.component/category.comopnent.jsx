// import { useContext } from 'react'
// import { CartContext } from '../../context.component/context'
import Product from '../Product.card.component/Product.card.component'
import { Link } from 'react-router-dom'
import {selectCategoriesMap} from '../../store.redux/category/category.selector'
import { useSelector } from 'react-redux'
const Category = () => {
    // const { sata } = useContext(CartContext)

const Sata=useSelector(selectCategoriesMap)
   
    return (
        <div>
            {
                Object.keys(Sata).map(obj => (
                    <div>
                        <Link style={{color:'black' , textDecoration:'none' ,marginLeft:'300px'}} to={obj}>
                        <h2 style={{marginleft: '48%', letterspacing: '24px'}}>{obj.toLocaleUpperCase()}</h2>
                        </Link>
                        <div className='h'>
                            {Sata[obj]
                                .filter((_, index) => index < 4)
                                .map((objj) => (
                                    <Product key={objj.id} Product={objj}></Product>
                                ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Category;