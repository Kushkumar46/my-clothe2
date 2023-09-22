import { createContext , useState} from "react";
import home from '../../allData/shop-data.json'

export const Shopcontext= createContext({
   product:[]
});

export const Shopcontextprovider= ({children})=>{
   const [product, setproduct]=useState(home)
    const value = {product}
    return <Shopcontext.Provider value={product}>{children}</Shopcontext.Provider>

}