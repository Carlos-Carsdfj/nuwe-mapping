import { useState, useEffect } from 'react'
import  Map from './Map'
import useMapContext from '../context/useContext.js'
export default function MapContainer() {


  const {  locations  } = useMapContext()

  return (
    <Map locations={locations} />
  )
}

