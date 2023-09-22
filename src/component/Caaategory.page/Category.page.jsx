import { useParams } from "react-router-dom";
import Product from '../Product.card.component/Product.card.component'
import { useContext, useEffect, useState } from "react";
import {selectCategoriesMap} from '../../store.redux/category/category.selector'

import { useSelector } from "react-redux";
// import { CartContext } from "../../context.component/context";

import './category.page.scss'
const CategoryPage =()=>{       
    const { Ca } = useParams();
    const CategoryPage= Ca
    const CategoryPag=CategoryPage.toLocaleLowerCase()
  // const { sata } = useContext(CartContext);
  const sata=useSelector(selectCategoriesMap)
  const [Products, setProducts] = useState(sata[CategoryPag]);



  useEffect(() => {
    setProducts(sata[CategoryPag]);
  }, [CategoryPag, sata]);


   return(
    <>
    <div>
        <h2 className="CategoryPag">{CategoryPag.toLocaleUpperCase()}</h2>
    </div>
    <div className="ccccc">
        {Products &&
        Products.map((Pro)=><Product key={Pro.id} Product={Pro}/>
        )}
    </div>
    </>
   
   )
}


export default CategoryPage;



