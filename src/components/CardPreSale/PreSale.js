import React from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import CountDownTimer from "../../utils/Countdown";

import { ReactComponent as Banner } from "../../img/DistribBanner.svg";

function PreSale({ refs }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const hoursMinSecs = {hours:4, minutes: 20, seconds: 40}

  return (
    <div className={classes.divCard}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Banner
          style={{
            position: "absolute",
            top: 0,
            marginTop: matches ? -122 : -94,
            width: matches ? 350 : "",
          }}
        />
        <Typography
          className={classes.textTitles}
          style={{
            fontSize: matches ? 18 : 28,
            color: "white",
            position: "absolute",
            marginBottom: matches ? 115 : 60,
          }}
        >
          DISTRIBUTING SOON!
        </Typography>
      </div>
      <Typography
        className={classes.textTitles}
        style={{
          fontSize: matches ? 24 : 44,
          color: "rgba(246, 192, 1, 1)",
          marginTop: matches ? 10 : 35,
        }}
      >
        PRESALE OPENS IN:
      </Typography>
      <CountDownTimer hoursMinSecs={hoursMinSecs}/>
      <Typography
        className={classes.text}
        style={{ fontSize: matches ? 18 : 24, color: "rgba(33, 37, 41, 1)", marginTop: 35 }}
      >
        Minimum Contribution of $250
      </Typography>
      <div
        style={{
          flexDirection:'column',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 5,
          marginBottom: matches ? 0 :35,
        }}
      >
          <div className={classes.divCardBlueTop}>

          </div>
          <div className={classes.divCardBlueBottom}> 

          </div>
        <Typography
          className={classes.textTitles}
          style={{
            fontSize: matches ? 18 : 28,
            color: "white",
            position: "absolute",
          }}
        >
          PARTICIPATE IN PRESALE
        </Typography>
      </div>
    </div>
  );
}

export default PreSale;
