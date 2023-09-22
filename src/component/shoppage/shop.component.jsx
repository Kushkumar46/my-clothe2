import { Route, Routes } from "react-router-dom";
import Category from "../category.component/category.comopnent";
import CategoryPage from '../Caaategory.page/Category.page'
import { useEffect } from "react";
import { CartContext } from "../../context.component/context";
import {getcategoryanddocument} from '../firebase/firebase'
import {setCategoriesMap} from '../../store.redux/category/category.action'
import { useDispatch } from "react-redux";



const ShopPage =()=>{

  const dispatch=useDispatch();

  useEffect(()=>{
    const aaa = async()=>{
       const aa= await getcategoryanddocument()
       dispatch(setCategoriesMap(aa))
    }
     aaa()
 },[])
    return(
      <Routes>
        <Route index element={<Category/>}/>
        <Route path=':Ca' element={<CategoryPage/>}/>
      </Routes>
    )
}
export default ShopPage;