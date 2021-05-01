import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: "#0B0C10 ",
    textAlign: "center",
    paddingTop: "25px",
    paddingBottom: "25px",
    color: "#fff",
  },
  socMedia: {
    color: "#fff",
  },
}));

function Footer() {
  const classes = useStyle();
  return (
    <Container maxWidth={false} className={classes.root}>
      <div className={classes.socMedia}>
        <Button
          href="https://twitter.com/JER0720"
          component={Link}
          target="_blank"
          color="inherit"
        >
          <span>
            <TwitterIcon />
          </span>
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.instagram.com/jerrrrr04/"
          component={Link}
        >
          <span>
            <InstagramIcon />
          </span>
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://github.com/JerrrStack"
          component={Link}
        >
          <span>
            <GitHubIcon />
          </span>
        </Button>
      </div>
      <footer>www.heroku-jer-portfolio.com</footer>
    </Container>
  );
}

export default Footer;
