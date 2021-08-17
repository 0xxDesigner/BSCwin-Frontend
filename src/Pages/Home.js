import { useState, useEffect } from 'react';
import PreSale from "../components/CardPreSale/PreSale";
import CardAbout from "../components/CardAbout/CardAbout";
import CardHowToPlay from "../components/CardHowTo/CardHowToPlay";
import CardTokenomics from "../components/CardTokenomics/CardTokenomics";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "./styles";
import {connectWallet, getUserBalance} from '../utils/Contract';

function Home({refs}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [userWallet, setUserWallet] = useState(0);
  const [userBalance, setUserBalance] = useState(0);

  async function connectAddress() {
    let accounts = await connectWallet();
    setUserWallet(accounts);
  }

  useEffect(() => {   
    async function load() {
        setUserBalance(await getUserBalance());

    }
    load()
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: 100,
        paddingBottom: 100
      }}
    >
      <PreSale />
      {matches && (
        
        <div onClick={() => connectAddress()} className={`${classes.divButton} ${classes.iconHover}`}>
          {userWallet && userWallet.length > 0 ?
              <Typography className={classes.textButton}>...{userWallet[0].substr(userWallet[0].length - 8)}</Typography>
              :
              <Typography className={classes.textButton}>Connect</Typography>
          }
        </div>
      )}
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <Typography className={classes.text}>Your ownership - {userBalance}</Typography>
        <Typography className={classes.text}>Total earnings: -</Typography>
      </div>
      <div className={classes.divWallet}>
        <Typography className={classes.text} style={{fontSize: matches ? 18 :24, color: 'rgba(52, 58, 64, 1)', marginTop: '2%'}}>Wallet Winners</Typography>
        <div style={{width: '95%', display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
        <Typography className={classes.text} style={{fontSize: matches ? 18 :24, color: 'rgba(134, 142, 150, 1)'}}>-</Typography>
        <Typography className={classes.text} style={{fontSize: matches ? 18 :24, color: 'rgba(17, 186, 99, 1)'}}>-</Typography>
        </div>
      </div>
      <div style={{ marginTop: 30, marginBottom: 30 }}>
        <Typography className={classes.text}>Learn about us!</Typography>
      </div>
      <CardAbout refs={refs}/>
      <CardHowToPlay refs={refs}/>
      <CardTokenomics refs={refs}/>
    </div>
  );
}

export default Home;
