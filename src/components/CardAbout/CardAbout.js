import React from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";

function CardAbout({ refs }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.divCard} ref={refs["About"]}>
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
          About Bscwin 🚀
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
            1. BSCWIN aims to provide the first fully sustainable lottery on the BSC network.
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            2. It is designed to provide lottery payouts to users without the
            need to sustain trading volume using an advanced liquidity-lottery
            payout mechanism.
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            3. BSC is the most popular low-gas decentralized network, and we
            believe that it is currently optimal for attracting both retail and
            institutional investors, particularly for lottery-focused
            decentralized applications.
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            4. Existing lottery projects suffer from the need to maintain high
            trading volume with high fees for lottery payouts. BSCWIN pioneers
            the crypto lottery space using an advanced liquidity-lottery payout
            mechanism to address this issue.
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
          >
            5. BSCWIN incorporates a custom weighted random sampling algorithm
            for completely random and fair selection of winners. Participants
            just need to buy and hold at least 1 $BSCWIN to be eligible for
            lottery draws.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CardAbout;
