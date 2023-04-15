import './Card.css'
import { Link } from "react-router-dom";
import {connect}from "react-redux"
export  function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className="card">
      <button onClick={()=>onClose(id)}>X</button>
      
      <Link to={`/detail/${id}`} >
         <h3>{name}</h3>
        <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin?.name}</h2>
         <img src={image} alt={name} />
      </Link>

         
       
      </div>
   );
}
const mapDispatchToProps=(dispatch)=>{

 
 }
 export default connect(null, mapDispatchToProps)(Card)
