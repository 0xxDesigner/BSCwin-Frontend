import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 50,
    paddingBottom: 100,
    textAlign: "center",
    [theme.breakpoints.down("sm")]:{
      flexDirection: "column",
      justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    }
  },
  subContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogo:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: '100%',
    marginTop: 20,
  },
  textTitles: {
    color: "white",
    fontFamily: "ChangaOne",
    fontWeight: 400,
    fontSize: 28,
    [theme.breakpoints.down("sm")]:{
      fontSize: 18,
    }
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
