import { useState } from "react"
import Image from 'next/image'
import ReactMapGL, { Marker, Popup, GeolocateControl} from "react-map-gl"
import useMapContext from '../context/useContext.js'

export default function Map({ locations }) {

  const [ selectedLocaton,setSelectedLocation ] = useState({})
  const { currentLocation, setCurrentLocation } = useMapContext()
  const [ viewport, setViewport] = useState({
  // The latitude and longitude of the center of London
    width:'100%',
    height:'100%', 
    latitude: 51.5974,
    longitude: -0.1278,
    zoom: 10,
  });

  const handler = (view)=>{
    setCurrentLocation([
      view.coords.longitude,
      view.coords.latitude
    ])
  
  }
  const geolocateControlStyle = {
    right: 10,
    top:10
  }

return <ReactMapGL
  {...viewport}
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={process.env.NEXT_PUBLIC_KEY}
  onViewportChange={setViewport}
  >

    <GeolocateControl
      style={geolocateControlStyle}
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
      onGeolocate={handler}
      auto
    />

      <Marker latitude={currentLocation[1]} longitude={currentLocation[0]}
        offsetLeft={0}
        offsetTop={0}
      >
        <Image src='/locationIcon.svg' alt='current location icon' 
          width={20}
          height={20}
        />
      </Marker>
     {
      locations.map((location) => (
        <div key={location.id}>
          <Marker 
            latitude={location.center[1]}
            longitude={location.center[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <a 
              onClick={() => {
                setSelectedLocation(location)
              }}
            >
              <span role='img'aria-label="push-pin">📌</span>          
            </a>           
          </Marker>
          {selectedLocaton.id === location.id ?
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={ location.center[1] }
              longitude={ location.center[0]}
            >
              {location.place_name}
            </Popup> 
            : false            
          }
        </div>
      ))
    }
     </ReactMapGL>
}
