import React from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const CountDownTimer = ({ hoursMinSecs }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) reset();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'flex-start'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontFamily: "ChangaOne",
            fontWeight: 400,
            fontSize: matches ? 44 : 70,
            color: "rgba(52, 58, 64, 1)",
            marginTop: 5,
          }}
        >{`${hrs.toString().padStart(2, "0")}`}</Typography>
        <Typography
          style={{
            color: "white",
            fontFamily: "Changa",
            fontWeight: 500,
            fontSize: matches ? 18 : 24,
            color: "rgba(134, 142, 150, 1)",
          }}
        >
          Hour
        </Typography>
      </div>
      <Typography
          style={{
            color: "white",
            fontFamily: "ChangaOne",
            fontWeight: 400,
            fontSize: matches ? 44 : 70,
            color: "rgba(52, 58, 64, 1)",
            marginTop: 5,
          }}
        >:</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontFamily: "ChangaOne",
            fontWeight: 400,
            fontSize: matches ? 44 : 70,
            color: "rgba(52, 58, 64, 1)",
            marginTop: 5,
          }}
        >{` ${mins.toString().padStart(2, "0")}`}</Typography>
        <Typography
          style={{
            color: "white",
            fontFamily: "Changa",
            fontWeight: 500,
            fontSize: matches ? 18 : 24,
            color: "rgba(134, 142, 150, 1)",
          }}
        >
          Min
        </Typography>
      </div>
      <Typography
          style={{
            color: "white",
            fontFamily: "ChangaOne",
            fontWeight: 400,
            fontSize: matches ? 44 : 70,
            color: "rgba(52, 58, 64, 1)",
            marginTop: 5,
          }}
        >:</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            color: "white",
            fontFamily: "ChangaOne",
            fontWeight: 400,
            fontSize: matches ? 44 : 70,
            color: "rgba(52, 58, 64, 1)",
            marginTop: 5,
          }}
        >{`${secs.toString().padStart(2, "0")}`}</Typography>
        <Typography
          style={{
            color: "white",
            fontFamily: "Changa",
            fontWeight: 500,
            fontSize: matches ? 18 : 24,
            color: "rgba(134, 142, 150, 1)",
          }}
        >
          Sec
        </Typography>
      </div>
  
    </div>
  );
};

export default CountDownTimer;
