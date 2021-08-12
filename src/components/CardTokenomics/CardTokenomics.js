import React from "react";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import tokenomics from '../../img/Desktoptokenomics.png'
import tokenomicsMobile from '../../img/MobileTokenomics.png'


function CardTokenomics({ refs }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.divCard} ref={refs['Tokenomics']}>
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
          Tokenomics 🔗
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
            1. Total supply of 7,000,000 KUWIN
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            2. Marketing Tax (3%) on transactions
          </Typography>
          <Typography
            className={classes.text}
            style={{
              fontSize: matches ? 14 : 18,
              color: "rgba(33, 37, 41, 1)",
            }}
            paragraph
          >
            3. Dev Tax (2%) on transactions
          </Typography>
        </div>
        <div style={{display: 'flex', width: '100%', justifyContent:'center', alignItems:'center', paddingBottom: matches ? 30 : 0, paddingRight: matches ? 20 : 0}}>
        {!matches ? 
        
        <img src={tokenomics} alt="tokenomics" width={600}/> : <img src={tokenomicsMobile} alt="tokenomics" width={250}/>}
        </div>
        
      </div>
    </div>
  );
}

export default CardTokenomics;
