import Box from '@material-ui/core/Box';
import { lighten, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    circle:{
      maxWidth:"20",
      maxHeight:"20",
      background:"#f00",
      color:"#f00",
      borderRadius: "25%",
      align: "center",
      margin: "auto",
      marginTop:"2",
      marginBottom:"2",
      border:"1"
      
    },
  
    na: {
      background:"#ccc",
      color:"#ccc",
    },
  
    circle1: {
      background:"#030",
      color:"#030",
    },
  
    circle2: {
      background:"#060",
      color:"#060",
    },
  
    circle3: {
      background:"#090", 
      color:"#090",
    },
    circle4: {
      background:"#0c0",
      color:"#0c0",
    },
    circle5: {
      background:"#0f0",
      color:"#0f0",
    },
}))  

export default function ColorBox(props){

    const classes = useStyles();
    console.log(props)
    return(<Box className = {(props.value ? classes["circle"+props.value] : classes.na)+' '+classes.circle}>_</Box>);

}