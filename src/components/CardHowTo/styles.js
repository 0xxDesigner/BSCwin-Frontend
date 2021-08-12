import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divCard: {
    marginTop: 30,
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    width: 730,
    minHeight: 332,
    background: "white",
    borderRadius: 4,
    boxShadow: "0px 16px 48px rgba(0, 0, 0, 0.176)",
    borderBottom: '6px solid #CED4DA',
    position:'relative',
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        minHeight: 310,
    }
  },
  textTitles: {
    color: "white",
    fontFamily: "ChangaOne",
    fontWeight: 400,
    fontSize: 24,
  },
  text: {
    color: "white",
    fontFamily: "Changa",
    fontWeight: 500,
    fontSize: 24,
  },
  
}));

export { useStyles };
