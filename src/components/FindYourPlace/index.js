import SearchForm from './SearchForm.js'
import Image from 'next/image'
import {
  Divider,
  Typography,
  Paper,
  makeStyles,
  TextField,
  InputAdornment,
} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({

  root:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    height:'100%',
  },
  textField:{
    borderColor:theme.palette.secondary.main,
    '& :valid + fieldset':{
      borderColor:theme.palette.secondary.main,
    },
    '& input':{
      color:theme.palette.secondary.main
    },
  },
  divider:{
  backgroundColor:theme.palette.secondary.main
  }


}))

  export default function FindYourPlace(){
  const classes = useStyles()

  return(
    <Paper
      elevation={0}
      className={classes.root}>
      <Typography
        variant='h5'
        component='h1'
        color='secondary'
        gutterBottom
      >
        FIND YOUR PLACE
      </Typography>
      <Typography
        variant='body2'
        component='h1'
        color='secondary'
      >
        Findyourplace, te permite buscar de forma rápida restaurantes, parques y bares para que puedas descansar o trabjar fuera de casa.
      </Typography>
      <TextField
        size='small'
        color='primary'
        className={classes.textField}
        placeholder='Encuentra espacios para trabajar y descansar'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Image src='/Search.svg' alt=' search con' 
                width={20}
                height={20}
              />
            </InputAdornment>  
          )         
        }}
      />

      <Divider  className={classes.divider} />
      <SearchForm/>
    </Paper>)
}

