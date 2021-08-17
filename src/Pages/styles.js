import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textTitles: {
    color: "white",
    fontFamily: "ChangaOne",
    fontWeight: 400,
    fontSize: 24,
  },
  text: {
    color: "black",
    fontFamily: "Changa",
    fontWeight: 500,
    fontSize: 18,
  },
  divButton:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width: '90%',
    height: 57,
    borderRadius: 8,
    background: 'transparent',
    border: '2px solid #FFFFFF',
    marginTop: 30
},
textButton:{
  color: "black",
  fontFamily: "ChangaOne",
  fontWeight: 400,
  fontSize: 24,
},
iconHover: {
  cursor: "pointer",
  transition: "transform 0.15s ease-in-out",
  "&:hover": {
    opacity: 0.6,
    transform: "scale3d(1.05, 1.05, 1)",
  },
},
divWallet: {
    background:'white',
    display:'flex',
    justifyContent:'flex-start',
    flexDirection:'column',
    alignItems:'center',
    width: 730,
    height: 124,
    borderRadius: 4,
    boxShadow: '0px 16px 48px rgba(0, 0, 0, 0.176)',
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        height: 96,
    }
}
  
}));

export { useStyles };
