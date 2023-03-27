import React, { useState } from 'react'
import axios from "axios"

const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    const [city,setCity] = useState("")
    const [ismarried,setIsmarried] = useState(false)

    const handleClick = () => {
        const payload = {name,email,password,age,gender,city,ismarried}
        axios.post("https://aggressive-lime-beanie.cyclic.app/users/register",payload).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <h1>Signup</h1>
        <div>
            <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="text" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" placeholder='gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
            <input type="text" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <input type="text" placeholder='is_married' value={ismarried}/>
            <button onClick={handleClick}>submit</button>
        </div>
    </div>
  )
}

export default Signup