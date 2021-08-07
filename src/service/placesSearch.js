 const  placesSearch= async ({ place, bbox }) =>{

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?bbox=${bbox[0][0]},${bbox[0][1]},${bbox[1][0]},${bbox[1][1]}&access_token=pk.eyJ1IjoiY2Fyc2QtZmoiLCJhIjoiY2twZnlwN3RzMDNyajJybXpobDQxbzNoMiJ9.u2-iSz39PdqG5BRvZVZ2ag`
 
  try{
   const resp =  await fetch(url).then(response =>response.text()).then(res => JSON.parse(res))
    return resp.features.map(res =>{
      return {
        ...res,
        type_search:place
      }
    })
  } catch(error){
    console.error(error)
    return 
  }
     
}

export default placesSearch
