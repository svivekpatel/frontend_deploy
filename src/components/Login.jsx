import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
  
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   

    const handleClick = () => {
        const payload = {email,password}
        axios.post("https://aggressive-lime-beanie.cyclic.app/users/login",payload).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <h1>login</h1>
        <div>
        
            <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleClick}>submit</button>
        </div>
    </div>
  )
  
}

export default Login