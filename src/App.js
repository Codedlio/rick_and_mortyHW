import "./App.css";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
//import SearchBar from "./components/SearchBar.jsx";
// import characters from "./data.js";
import React, { useEffect, useState } from "react";
import axios from "axios"
import {Routes,Route, useLocation, useNavigate} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";


function App() {
  const [characters,setCharacters] = useState([])
  const location= useLocation()  
  const navigate = useNavigate();
  const [access, setAccess]=useState(false)
  const EMAIL="alex@gmail.com"
  const PASSWORD="hello123"

   
  
    const login=(userData)=>{
    if (userData.email===EMAIL && userData.password===PASSWORD) {
      setAccess(true)
      navigate("/home")
    }
    
  }
 useEffect(() => {
       !access && navigate ('/');
    },[access]);
  
  const logout=()=>{
    setAccess(false)
    navigate("/")
  }
    function onSearch(id) {
  axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        console.log(":::::", data);
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        } // .then(()=>{})
      });
    
 }
    function onClose(id){
      setCharacters(characters.filter(charac=>charac.id!==id))
      // setCharacters((oldChars)=>
      //   oldChars.filter(charac=>charac.id!==id))
      
      //Integer.parseInt(id)
    }
   
  

  return (
    <div className="App">
      {location.pathname!=="/" &&  <Nav  onSearch={onSearch} logOut={logout}/>}
    
     
    <Routes>

      <Route path="/"element={<Form login={login}/>}> </Route>
      <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}> </Route>
      <Route path="/about"element={<About/>}> </Route>
      <Route path="/detail/:id"element={<Detail/>}></Route>
      
    </Routes>      
     
      
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
    </div>
  );
}

export default App;
