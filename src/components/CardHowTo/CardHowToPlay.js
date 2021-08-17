import React from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

function CardHowToPlay({ refs }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.divCard} ref={refs['HowTo']}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "85%",
        }}
      >
        <Typography
          className={classes.textTitles}
          style={{
            fontSize: matches ? 28 : 44,
            color: "rgba(52, 58, 64, 1)",
            marginTop: matches ? 10 : 30,
          }}
        >
          How to PLay 🎮
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 20,
            marginBottom: 25,
          }}
        >
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            1. <span style={{ color: "#FFC700",textDecoration: 'underline' }}>$BSCWIN</span> is
            our native token
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            2. One <span style={{ color: "#FFC700", textDecoration: 'underline' }}>$BSCWIN</span>{" "}
            will get you one Lottery entry automatically
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            3. Thats it! the more{" "}
            <span style={{ color: "#FFC700",textDecoration: 'underline' }}>$BSCWIN</span> you
            have, the better your chances!
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "#868E96",
            }}
            paragraph
          >
            Tips: if your are watching the countdown, our Smart scanner might
            recommend you to buy some more $BSCWIN to give you the best chance of
            winning that draw!
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CardHowToPlay;
