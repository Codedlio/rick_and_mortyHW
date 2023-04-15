let myFavorites=[]
const postFav = (req,res) => {
    const {name,id,gender,species,origin,image,status}=req.body
    if(!id || !name || !image){
      return  res.status(404).json({message:"The require information is missing" })
    }
    const character={name,id,gender,species,origin,image,status}
    myFavorites.push(character);
    res.status(200)
    .json(myFavorites)
};
const deleteFav = (req,res) => {
    const {id}=req.params
    const filter=myFavorites.filter(fil=>fil.id!=id)
    myFavorites=filter
    res.status(200).json(myFavorites)
   
};

module.exports={
    postFav,
    deleteFav,
}

    //             const chart={
    //                 id:data.id,
    //                 name:data.name,
    //                 gender:data.gender,
    //                 species:data.species,
    //                 origin:data.origin?.name,
    //                 image:data.image,
    //                 status:data.status
    //             }