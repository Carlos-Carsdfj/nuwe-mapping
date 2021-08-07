import { useContext, createContext, useState } from 'react'

export const MapContext = createContext(null)


export const MapContextProvider = ({ children }) => {

  const [ currentLocation, setCurrentLocation  ]=useState([-0.1278, 51.5974])
  const [ locations, setLocations ] = useState([])
  const [ errorLocations, setErrorLocations ] = useState(false) 
  return (
    <MapContext.Provider 
      value={{ 
        currentLocation, 
        setCurrentLocation, 
        locations, 
        setLocations, 
        errorLocations, 
        setErrorLocations }}
    >
      {children}
    </MapContext.Provider>    
  )
}

export default function  useMapContext(){
 
  const context = useContext(MapContext)

  if(!context){
    console.error('Error deploying App Context!!!')  
  }
  return context
}


