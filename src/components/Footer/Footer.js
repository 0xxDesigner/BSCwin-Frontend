import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { ReactComponent as Twitter } from "../../img/twitterlogo.svg";
import { ReactComponent as Telegram } from "../../img/Telegramlogo.svg";
import { ReactComponent as Git } from "../../img/Gitlogo.svg";
import { ReactComponent as Bsc } from "../../img/bsclogo.svg";
import { ReactComponent as Medium } from "../../img/Mediumlogo.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.container}>
      {matches ? (
        <>
          <div className={classes.subContainer}>
            <Typography className={classes.textTitles}>Learn More</Typography>
            <div className={classes.containerLogo}>
              <Link
                href={"https://kuwin.gitbook.io/kuwin/"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Git
                  fill="white"
                  style={{ marginRight: 30 }}
                  className={classes.iconHover}
                />
              </Link>
              <Link
                href={""}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none", marginRight: 30 }}
              >
                <Bsc fill="white" className={classes.iconHover} />
              </Link>
              <Link
                href={"https://medium.com/@kuwin/4cfced591b72"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Medium fill="white" className={classes.iconHover} />
              </Link>
            </div>
          </div>
          <div className={classes.subContainer} style={{ marginTop: "4%" }}>
            <Typography className={classes.textTitles}>
              Our Community
            </Typography>
            <div className={classes.containerLogo}>
              <Link
                href={"https://twitter.com/Kuwin_token"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Twitter fill="white" className={classes.iconHover} />
              </Link>
              <Link
                href={"https://t.me/KUWIN_Token"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Telegram fill="white" className={classes.iconHover} />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.subContainer} style={{ marginRight: "10%" }}>
            <Typography className={classes.textTitles}>
              Our Community
            </Typography>
            <div className={classes.containerLogo}>
              <Link
                href={"https://twitter.com/Kuwin_token"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Twitter fill="white" className={classes.iconHover} />
              </Link>
              <Link
                href={"https://t.me/KUWIN_Token"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Telegram fill="white" className={classes.iconHover} />
              </Link>
            </div>
          </div>
          <div className={classes.subContainer}>
            <Typography className={classes.textTitles}>Learn More</Typography>
            <div className={classes.containerLogo}>
              <Link
                href={"https://kuwin.gitbook.io/kuwin/"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Git fill="white" className={classes.iconHover} style={{marginRight: 20}} />
              </Link>

              <Link
                href={""}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Bsc fill="white" className={classes.iconHover} style={{marginRight: 20}}/>
              </Link>
              <Link
                href={"https://medium.com/@kuwin/4cfced591b72"}
                rel="noopener noreferrer"
                color="inherit"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Medium fill="white" className={classes.iconHover} />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Footer;
