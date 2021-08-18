import React, {useEffect, useState} from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import CountDownTimer from "../../utils/Countdown";

import { ReactComponent as Banner } from "../../img/DistribBanner.svg";
import { Link } from "@material-ui/core";
import moment from "moment";

function PreSale({ refs }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
   
    if(window.localStorage.getItem('hours') !== null){
      setTimer({
        hours: window.localStorage.getItem('hours'),
        minutes : window.localStorage.getItem('minutes'),
        seconds : window.localStorage.getItem('seconds')
      })

    } else {
      console.log("entrei");
      let startTime = moment("16-08-2021 01:01:01", "HH:mm:ss");
      let endTime = moment("20-08-2021 01:01:01", "HH:mm:ss");

      let hoursDiff = endTime.diff(startTime, "hours");
      window.localStorage.setItem('hours', hoursDiff)

      let minutesDiff = endTime.diff(startTime, "minutes");
      window.localStorage.setItem('minutes', minutesDiff)
    
      let secondsDiff = endTime.diff(startTime, "seconds");
      window.localStorage.setItem('seconds', secondsDiff)
    }
  }, [])


  const hoursMinSecs = { hours: timer.hours, minutes: timer.minutes, seconds: timer.seconds };

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
            width: matches ? 300 : "",
          }}
        />
        <Typography
          className={classes.textTitles}
          style={{
            fontSize: matches ? 16 : 28,
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
      <CountDownTimer hoursMinSecs={hoursMinSecs} />
      <Typography
        className={classes.text}
        style={{
          fontSize: matches ? 18 : 24,
          color: "rgba(33, 37, 41, 1)",
          marginTop: 35,
        }}
      >
        Max contribution of $250 BUSD
      </Typography>
      <Link
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLSdXex0rvxkiBh3LFwAWvoL23lt6kH_oSrtD8FvuvQqRmzfKmw/viewform?usp=send_form"
        }
        rel="noopener noreferrer"
        color="inherit"
        target="_blank"
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 5,
          marginBottom: matches ? 0 : 35,
        }}
        className={classes.iconHover}
      >
        <div className={classes.divCardBlueTop}></div>
        <div className={classes.divCardBlueBottom}></div>
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
      </Link>
    </div>
  );
}

export default PreSale;
