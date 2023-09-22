import { useState , } from "react"
import {aaa,usercreatdocument} from '../firebase/firebase'
import Input from "../input-form/input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-up.scss'
const defaultform = {
    DisplayName:'',
    email:'',
    password:'',
    confirm:''
}; /// if use the obj in function
const Signupform = ()=>{
    const [string, setstirng]=useState(defaultform)
    const {DisplayName,email,password,confirm}=string // so this use for 7 line 
    console.log(string) 
    Event=((Event)=>{
         const {value ,name} = Event.target
         setstirng({...string,[name]:value}) // this method use for if stor setstring obj form 

    })



    const resetform=()=>{
       setstirng(defaultform)
    }
   
    const handelchange= async(event)=>{
        event.preventDefault()
        if(password !== confirm){
           alert("password do not match")
           return;
        }

        try{
          const {user}= await aaa(email,password)
          await usercreatdocument(user,{DisplayName})
          resetform()

        }catch(error){
          console.log(error)
          if(error.code=='auth/email-already-in-use'){
            alert("user alredy this id access")
          }else if(error.code=='auth/weak-password'){
            alert('pasword must be strong')
          }

        }
    }

  return(
    <div className="sign-up-container">
      <h2 className="h2">Don't have account</h2>
        <span>Sign up with your email & password</span>                                                                  
        <form onSubmit={handelchange}>
            <Input required type="text" onChange={Event} value={DisplayName} name="DisplayName" label='Dispaly Name'/>
            <Input required type="Email" onChange={Event} value={email} name="email" label=' Email'/>
            <Input required type="password" onChange={Event} value={password} name="password" label='Pasword'/>
            <Input required type="password" onChange={Event} value={confirm} name="confirm" label='conferm pasword'/>
            <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sing-up</Button>   
        </form> 
    </div>
  )
}
export default Signupform;