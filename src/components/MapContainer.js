import  { makeStyles, Modal, Paper, Typography, Button } from '@material-ui/core'
import  Map from './Map'
import useMapContext from '../context/useContext.js'

const useStyles = makeStyles((theme)=>({
  modal:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  paper:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    width:'90%',
    backgroundColor:theme.palette.warning.main,
    minHeight:300,
    maxWidth:556,
    padding:theme.spacing(4)
  },
  closeButton:{
    alignSelf:'flex-start'
  }
}))

export default function MapContainer() {  
  const classes = useStyles()
  const {  locations, errorLocations, setErrorLocations   } = useMapContext()
  const modalClose = () =>{
  setErrorLocations(false)
  }

  const modalBody =(
    <Paper
      elevation={3}
      className={classes.paper}
    >
      <Typography
      variant='h5'
      component='h2'
      color='secondary'
      >
      Ups, no hemos encontrado nada
      </Typography>
      <Typography
      variant='subtitle1'
      component='p'
      color='secondary'
      >
      No hemos encontrado ningún resultado con la busqueda que estás intentando realizar
      </Typography>
      <Button 
        variant='contained' 
        color='primary'  
        onClick={modalClose} 
        className={classes.closeButton} 
        size='large'
      >
        Cerrar
      </Button>
    </Paper>

  )
  return (<>
    <Map locations={locations} />
    <Modal
      className={classes.modal}
      open={errorLocations}
      onClose={modalClose}
    >
      {modalBody}
    </Modal>
  </> )
}

