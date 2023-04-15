import { useState } from "react"
import { validate } from "./validate"

export default function Form({login}){
    const[userData, setUserData]=useState({
        email:"",
        password:""
    })
    const[errors,setErrors]=useState({})
    
const    hadleChange=(event)=>{
    console.log(event);
    setUserData({
        ...userData,
        [event.target.name]: event.target.value
    })
    setErrors(
        validate({
           ...userData,
           [event.target.name]: event.target.value
        })
     );


}

const handleSubmit=(evento)=>{
    console.log(evento)
    evento.preventDefault();
    login(userData)
}
    return(
    <div>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="" >Email</label>
            <input onChange={hadleChange} type="text" name="email" value={userData.email}/>
            <p className='danger'>{errors.email}</p>
            <label htmlFor="">Password</label>
            <input onChange={hadleChange} type="password" name="password" value={userData.password}/>
            <p className='danger'>{errors.password}</p>
            <button type="submit" >Submit</button>

        </form>
    </div>
    )
}