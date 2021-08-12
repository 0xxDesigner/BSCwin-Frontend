import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divCard: {
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    width: 730,
    minHeight: 418,
    background: "white",
    borderRadius: 4,
    boxShadow: "0px 16px 48px rgba(0, 0, 0, 0.176)",
    borderBottom: '6px solid #CED4DA',
    position:'relative',
    [theme.breakpoints.down('sm')]:{
        width: '90%',
        minHeight: 359,
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
  divCardBlueTop: {
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    background: 'rgba(53, 186, 254, 0.8)',
    boxShadow: '0px 16px 48px rgba(0, 0, 0, 0.176)',
    borderRadius: '8px 8px 0px 0px',
    width: '90%',
    height: 45,
    [theme.breakpoints.down('sm')]:{
        height: 30,
    }
  },
  divCardBlueBottom: {
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    background: '#35BAFE',
    boxShadow: '0px 2px 1px #086392',
    borderRadius: '0px 0px 8px 8px',
    width: '90%',
    height: 50,
    [theme.breakpoints.down('sm')]:{
        height: 30,
    }
  }
  
}));

export { useStyles };
