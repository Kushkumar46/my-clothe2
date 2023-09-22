import { useState } from "react"
import { signInWithGooglePopup , usercreatdocument} from "../firebase/firebase";
import { useContext } from "react";
import Provi from '../../context.component/context'
import {aaa} from '../firebase/firebase'
import Input from "../input-form/input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {Usercurrent} from '../../context.component/UserContext'
import './Signa.scss'



const defaultform = {
    email:'',
    password:'',
}; /// if use the obj in function
const Signa = ()=>{
    const [string, setstirng]=useState(defaultform)
    const {email,password}=string // so this use for 7 line 
    console.log(string) 
    Event=((Event)=>{
         const {value ,name} = Event.target
         setstirng({...string,[name]:value}) // this method use for if stor setstring obj form 

    })



    const {setcurrentstat, Currentstat}=useContext(Usercurrent)

   


    const resetform=()=>{
       setstirng(defaultform)
    }
   
    const handelchange= async(event)=>{
        event.preventDefault()
        try{
          const {user}= await aaa(email,password)
          setcurrentstat(user)

          console.log(user)
          resetform()
        }catch(error){
          if('auth/invalid-email'){
            alert('Plz Add Valid Email')
          }
          console.log(error)
          resetform()

        }
    }
    
    const Loguser=async()=>{
        const {user} = await signInWithGooglePopup()
       const docref=  usercreatdocument(user)
      }

  return(
    <div className="inputparent"> 
    <h2 className="h2">already have a account</h2>                                                              
        <form onSubmit={handelchange}>
            <Input required type="Email" onChange={Event} value={email} name="email" label=' Email'/>
            <Input required type="password" onChange={Event} value={password} name="password" label='Pasword'/>
            <div className="buttons-containe">
            <Button buttonType={BUTTON_TYPE_CLASSES.google} type="submit">Sing-in</Button>  
            <Button buttonType={BUTTON_TYPE_CLASSES.google}  onClick={Loguser}>google</Button>
 

            </div>
        </form>
        <div>
        </div>
    </div>
  )
}
export default Signa;