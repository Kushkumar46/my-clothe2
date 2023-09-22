import Allconatiner from '../All-conatiner/all-container'
import './outer.scss'
const Outercomponent = ({contain})=>{

   return(
       <div>
        <div className="outer-container">
           {contain.map((text) => {
            const {id}=text
               return <Allconatiner key={id} text={text} /> // id always should be with map when you use the map
           })}

       </div>
       </div>
   )
}
export default Outercomponent;