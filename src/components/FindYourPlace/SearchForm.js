import { useState } from 'react'
import Image from 'next/image'
import { 
  makeStyles, 
  Button, 
  Slider,
  Typography,
  Box
} from '@material-ui/core/'
import useSearch from '../../hooks/useSearch'
import useCheckButton from '../../hooks/useCheckButton.js'
import foodIcon from '../../../public/food.svg'
import foodSelected from '../../../public/selectedFood.svg'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin:0,
    display:'flex',
    alignItems:'stretch',
    flexDirection:'column',
    gap:20,
    width:'100%'
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  radioGroup: {
    display:'none'
  },
}))


export default function ErrorRadios() {

  const restaurant = useCheckButton('restaurant')
  const pub = useCheckButton('pub')
  const park = useCheckButton('park')

  const { setFilter, errorLocations, setErrorLocations } = useSearch()
  const classes = useStyles();
  const [ valueText, setValueText ] = useState(1)


  const handlerClick = (value) =>{

  }
  const handleSubmit = (event) => {
    event.preventDefault()
   let places = []
    if(park.value){
      places.push(park.value)     
    }
    if(restaurant.value){
      places.push(restaurant.value)     
    }
    if(pub.value){
      places.push(pub.value)     
    }
    const  search ={
      places,
      distance:valueText*1000
    }
    places.length > 0 && setFilter(search)
  }

  const handlerChange= (ev, newValue ) =>{
    setValueText(newValue)  
  }

  return (
    <>
      <Box 
        display='flex' 
        flexDirection='column'
      >
        <Typography
          variant='subtitle1'
          component='h2'
          color='secondary'
        >
          Destacados
        </Typography>
    <Typography
          variant='body2'
          component='h3'
          color='secondary'
        >
        Selecciona algunos de los marcadores por defecto que hemos seleccionado para ti
        </Typography>
      </Box>
      <form onSubmit={handleSubmit} className={classes.formControl}>
          <Button variant='outlined' color={restaurant.isSelected ? 'primary' : 'secondary'} 
            onClick={()=>restaurant.toggle()}
            startIcon={
              <Image 
                src={
                  restaurant.isSelected ?
                  '/selectedFood.svg'
                  :'/food.svg'
                } 
                width={20}  
                height={20} 
                alt='food Icon'
              />}
            
          >
            Restaurantes 
          </Button>
          <Button variant='outlined' color={park.isSelected ? 'primary' : 'secondary'} 
            onClick={()=>park.toggle()} 
            startIcon={
              <Image 
                src={
                  park.isSelected ?
                  '/selectedUnion.svg'
                  :'/Union.svg' 
                }
                width={20} height={20}
                alt='park Icon '
              />}
          >
             Parques y sitios al aire libre 
          </Button>      
          <Button variant='outlined' color={pub.isSelected ? 'primary' : 'secondary'} 
            onClick={()=>pub.toggle()} 
            startIcon={
              <Image 
                src={
                  pub.isSelected ?
                  '/selectedSubtract.svg'
                  :'/Subtract.svg'
                }
                width={20} 
                height={20} 
                alt='Pub Icon Icon'
              />}
          >
            Bares  
          </Button>
          <Slider
            orientation="horizontal"
            onChange={handlerChange}
            value={valueText}
            min={1}
            max={30}
            aria-labelledby="distance-slider"
          />
          <Button type="submit" variant="contained" color="primary" >
            Buscar
          </Button>
      </form>
    </>
  );
}

