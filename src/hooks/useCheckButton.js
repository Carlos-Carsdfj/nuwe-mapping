import { useState, useEffect } from 'react'

const useCheckButton = (val) => {
  const [ isSelected, setIsSelected ] = useState(false)
  const [ value, setValue ] = useState('')
  const toggle = () =>{
    setIsSelected(prev => !prev )
  }
  
  const getValueIfSelected = ()=>{
    if(isSelected){
      setValue(val)
      return 
    }else{
      setValue(null)
    }      
  }

  useEffect(()=>{
    getValueIfSelected()
  },[isSelected])

  return {
    getValueIfSelected,
    isSelected,
    value,
    toggle,
  }
}

export default useCheckButton 
