import React from 'react'
import dynamic from 'next/dynamic'
import { Paper, Grid, makeStyles } from '@material-ui/core'
import FindYourPlace from '../src/components/FindYourPlace'
const MapContainer = dynamic(() => import("../src/components/MapContainer"), {
  loading: () => "Loading...",
  ssr: false
});

const useStayles = makeStyles(theme => ({
  leftDiv: {
    color:theme.palette.secondary.main,
    textAlign:'center',
    padding:theme.spacing(2),
    height:'100%',  
  },
  root:{
    height:'100vh'
  },
  rightDiv:{
    height:'100%',
    margin:0,
    padding:0,
  }
}))
export default function Index() {
 const classes = useStayles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={3} >
        <Paper  className={classes.leftDiv} > 
          <FindYourPlace />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={9} >
        <Paper className={classes.rightDiv} > <MapContainer/> </Paper>
      </Grid>
    </Grid>
  );
}



