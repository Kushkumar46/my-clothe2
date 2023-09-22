import  './all-container.scss'
import {Link} from 'react-router-dom'
const Allconatiner = ({text,key})=>{
   return(
       <div key={key} className="category-container">
           <div className='background-image ' style={{
               backgroundImage: `url(${text.imageUrl})`
           }}>
           </div>
           <Link style={{textDecoration:'none'}} to={`shop/${text.title.toLowerCase()}`}className='text-container'>
               <h1 className='h1' style={{fontWeight:"bold",margin: "0 6px 0",fontSize: "22px",color:" #4a4a4a"}}>{text.title}</h1>
               <p className='p' style={{fontWeight: '700',
              fontSize: '16px', color:'black'}}>Shop Now</p>
           </Link>
       </div>
   )
}
export default Allconatiner;