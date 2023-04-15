const express = require('express');

const server = express();
const PORT = 3001;
const router= require("./routes/index")

server.use(express.json())

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use("/rickandmorty", router)
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});




















// import data from "./utils/data";
// const http = require('http'); // importamos el módulo http para poder trabajar con el protocolo
// const {getCharById}= require("./controllers/getCharById.js")
// http.createServer((req, res)=>{ // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket
// 	//Para crear un response empezamos escribiendo el header
// 	res.setHeader('Access-Control-Allow-Origin', '*');
//   const {url}=req
//   const id=url.split("/").at(-1) 
//     if( url.includes('/rickandmorty/character/') ) {
     
//      return getCharById(res,id);
     
//     }
    
    


// }).listen(3001, 'localhost');