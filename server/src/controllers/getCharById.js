const axios=require("axios");


const URL="https://rickandmortyapi.com/api/character/"

const getCharById = (req,res) => {
    const{id}=req.params
    try{
    axios
    .get(`${URL}${id}`)
    .then(res=>res.data)
    .then(data=>{
        if(data){
        const chart={
        id:data.id,
        name:data.name,
        gender:data.gender,
        species:data.species,
        origin:data.origin?.name,
        image:data.image,
        status:data.status                                
        }
        res.status(200).json(chart);
    }else {
        res.status(404).json({ message: "character not found" })
    }

    })
}   catch(error){
        res.status(500).json({ message: error });
        console.log('Error parsing JSON:', error, data);
    }
}
module.exports=getCharById;




























// const axios = require("axios")
//  const getCharById =(res,id)=>{
    
//         axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response=>response.data)
//         .then((data)=>{
//             const chart={
//                 id:data.id,
//                 name:data.name,
//                 gender:data.gender,
//                 species:data.species,
//                 origin:data.origin?.name,
//                 image:data.image,
//                 status:data.status
//             }
//             res.writeHead(200, { 'Content-Type':'application/json' })
//             res.end(JSON.stringify(chart)) 
//         })
//         .catch(error=>
//         res
//         .writeHead(500, { 'Content-Type':'text/plain' })
//         .end(JSON.stringify(error.message))
//         )
        
        
// }
// module.exports= {
//     getCharById,
// }  

