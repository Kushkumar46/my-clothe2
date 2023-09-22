import { createContext , useReducer} from "react"


////////////////////////////
// write the actual value with the help of creatcontext

export const Usercurrent =createContext({
    Currentstat:null,
})



const UserReducerfuc=(state, action)=>{
    const {type, payload}=action
    switch(type){
        case 'SET_Current':
        return {
            ...state,
            Currentstat:payload
        }
        default:
            throw new Error(type)
    }

}
const INITIAL_STATE={
    Currentstat:null
}

export const State=({children})=>{
 
    const [{Currentstat}, dispatch]=useReducer(UserReducerfuc, INITIAL_STATE)

    const setcurrentstat=(user)=>{
        dispatch({type:'SET_Current', payload:user})
    }

    // const [Currentstat, setcurrentstat]=useState(null)

    const value={Currentstat,setcurrentstat}

    return <Usercurrent.Provider value={value}>{children}</Usercurrent.Provider>

}