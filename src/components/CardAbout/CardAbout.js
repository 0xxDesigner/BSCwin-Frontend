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
    <div className={classes.divCard} ref={refs['About']}>
        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'flex-start', width: '85%'}}>
      <Typography
        className={classes.textTitles}
        style={{
          fontSize: matches ? 28 : 44,
          color: "rgba(52, 58, 64, 1)",
          marginTop: matches ? 10 : 30,
        }}
      >
       About Kuwin 🍀
      </Typography>
        
      <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'flex-start', marginTop: 20, marginBottom: 25}}>
      <Typography
        className={classes.text}
        style={{ fontSize: matches ? 14 : 18, color: "rgba(33, 37, 41, 1)", }}
        paragraph
      >
        1. KUWIN aims to provide the first fully decentralized and sustainable lottery on the KCC network.
      </Typography>
      <Typography
        className={classes.text}
        style={{ fontSize: matches ? 14 : 18, color: "rgba(33, 37, 41, 1)"}}
        paragraph
      >
        2. It is designed to provide lottery payouts to users without the need to sustain trading volume using an advanced liquidity-lottery payout mechanism. 
      </Typography>
      <Typography
        className={classes.text}
        style={{ fontSize: matches ? 14 : 18, color: "rgba(33, 37, 41, 1)"}}
      >
        3. KCC chain is new, and we believe that it will be one of the next networks trending and attracting investors from ETH, BSC, and other networks.
      </Typography>
      </div>
      </div>
    </div>
  );
}

export default CardAbout;
