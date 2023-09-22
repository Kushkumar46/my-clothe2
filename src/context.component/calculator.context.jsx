import { createContext,useState } from "react";


const add=(couns,couter)=>{
   if(couter.id=='15'){

    return [couns.reduce((total,couns)=>total+couns)]
   }else if(couter.id=='12'){
    return [couns.reduce((total,couns)=>total*couns)]

   }else if(couter.id=='14'){
      couns.filter((obj)=>obj.id==couter.id)
   }
   

    return[...couns, couter.count]
}

export const Cal=createContext({
    count:[],
    Setfunction:()=>[],
    roman:0,
    addroman:()=>{},
})

 const func=(Event)=>{
   var map={'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 }
    var result=0;
    for(var i=0; i<Event.length; i++){
        var curr=map[Event[i]]
        console.log(curr)
        var next=map[Event[i+1]]
        if(curr<next){
            result +=next-curr; 
            i++;
        }else{
            result +=curr;
        }
    }
    return result
 }



export const Calu=({children})=>{
   
    const [count, setcount]=useState([])
    const [roman, setroman]=useState([])


    const Setfunction=(couter)=>{
        setcount(add(count, couter))
    }

    const addroman=(Event)=>{
        setroman(func(Event))
    }

    

    const value={count ,Setfunction, roman, addroman}
   return <Cal.Provider value={value}>{children}</Cal.Provider>
}