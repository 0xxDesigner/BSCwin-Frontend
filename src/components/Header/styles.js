import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    divSections:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingRight: '6%'
    },
  text:{
    color: "black",
    fontFamily: "Changa",
    fontWeight: 400,
    fontSize: 18,
    marginRight: 40
  },
  divButton:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width: 160,
      height: 57,
      borderRadius: 8,
      background: 'transparent',
      border: '2px solid #000000'
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

}));

export { useStyles };
