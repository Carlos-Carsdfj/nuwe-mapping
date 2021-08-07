
import {  useState, useEffect } from 'react'
import useMapContext from '../context/useContext.js'
import mapboxgl from '!mapbox-gl'
import  placesSearch from '../service/placesSearch.js'


const useSearch = () =>{
  
  const [ filter ,setFilter ]= useState(null)
  const { currentLocation, setCurrentLocation, locations, setLocations, errorLocations, setErrorLocations } = useMapContext()
  

 useEffect(() => {
    if(filter){
      const bbox = new mapboxgl.LngLat(currentLocation[0], currentLocation[1]).toBounds(filter.distance).toArray()
      const findPlace = async () =>{
        let lt = []
        for (const place of filter.places){
          await  placesSearch({place:place, bbox }).then(res =>{     
            if(!res || !Array.isArray(res)){
              return 
            }
            lt.push(...res)
          })
        }
        return lt
      }
      findPlace().then(places=>{
        if(places.length >0){    
          setLocations(places)
        }else{
          setErrorLocations(false)
        }      
      })     
    }
  },[filter, currentLocation, ])

  return{
    filter,
    setFilter,
    setCurrentLocation,
    locations,
    errorLocations,
    setErrorLocations
  } 
} 

export default useSearch
