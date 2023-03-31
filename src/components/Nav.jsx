import React from "react"
import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom";



export default function Nav({onSearch,logOut}){
    
return(
<div>
   
    <button onClick={logOut}>log out</button>
   
   <NavLink to="/about">
   <button  >About</button>
   </NavLink>
   <NavLink to="/home">
   <button  >Home</button>
   </NavLink>
   <SearchBar onSearch={onSearch} /> 
   
</div>
)
}