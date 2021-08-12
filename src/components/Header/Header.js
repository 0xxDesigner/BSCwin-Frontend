import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

import { ReactComponent as Logo } from "../../img/Kuwinlogo.svg";

function Header({ refs }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const goTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{paddingBottom: 100}}>
      <AppBar
        position="static"
        style={{ background: "transparent", paddingTop: matches ? 50 : 10 }}
        elevation={0}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: !matches ? "center" : "space-between",
          }}
        >
          <div
            style={{
              marginLeft: matches ? "6%" : 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            {matches ? <Logo /> : <Logo width={105} />}
          </div>

          <div className={classes.divSections}>
            {matches && (
              <>
                <Typography
                  className={`${classes.text} ${classes.iconHover}`}
                  onClick={() => goTo(refs["Tokenomics"])}
                >
                  Tokenomics
                </Typography>
                <Typography
                  className={`${classes.text} ${classes.iconHover}`}
                  onClick={() => goTo(refs["HowTo"])}
                >
                  {" "}
                  How to play
                </Typography>
                <Typography className={`${classes.text} ${classes.iconHover}`}
                onClick={() => goTo(refs["About"])}>
                  About
                </Typography>
                <Typography
                  className={`${classes.text} ${classes.iconHover}`}
                  
                >
                  Lotteryboard
                </Typography>

                <div className={`${classes.divButton} ${classes.iconHover}`}>
                  <Typography className={classes.textButton}>
                    Connect
                  </Typography>
                </div>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
