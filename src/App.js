import Outercomponent from './component/outer-component/outer-component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './component/navigation-component/nav-component'
import SignIN from './component/SignIN-component/SignIN'
import home from './allData/home-data.json'
import React, {  Suspense , lazy} from 'react'
import Cheakoutpage from './component/Cheakoutpage.component/Cheakoutpage.component'
import Calculator from './component/calculator.component/calculator.component'


import ShopPage from './component/shoppage/shop.component'


const Clothe = () => {
 
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Outercomponent contain={home}/>}/>
        <Route path='SignIN' element={<SignIN/>}/>
        <Route path='Shop/*' element={<ShopPage/>}/>
        <Route path='Cheakout' element={<Cheakoutpage/>}/>
        <Route path='cal' element={<Calculator/>}/>

      </Route> 
    </Routes>
  )
}

export default Clothe;
