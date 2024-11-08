import { Button, Container, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "60px",
    paddingBottom: "60px",
    minHeight: "80vh",
    backgroundColor: "#0B0C10   ",
    color: "#fff",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    "&, h1": {
      color: "#66FCF1 ",
    },
    "&, span": {
      color: "#C5C6C7",
    },
  },
  title: {
    textAlign: "Center",
    fontWeight: "300",
  },
  aboutContent: {
    padding: "1rem",
    width: "60%",
    textAlign: "center",
  },
  mypicture: {
    borderRadius: "50%",
    maxWidth: "100%",
  },
  aboutBody: {
    fontSize: "16px",
    lineHeight: "1.7",
    textAlign: "center",
  },
  sendBtn: {
    maxWidth: "100%",
    border: "solid #45A29E",
    "&:hover": {
      background: "#45A29E",
    },
    fontWeight: "bold",
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root} id="about">
      <div className={classes.aboutContent}>
        <h1 className={classes.title}>GET TO KNOW ME</h1>
        <img
          className={classes.mypicture}
          src="/assets/me.jpg"
          alt="mypicture"
          width="170px"
        />
        <p className={classes.aboutBody}>
          I'm currently a fresh grad student with a bachelor's degree in
          Information Technology. During our thesis project where my role is to
          do the whole website to be honest I'm not good in programming but when
          I started learning that is the time that I got really fascinated and
          motivate me to develop my own Website.
        </p>
        <Link href="/assets/CV/CV.pdf" underline="none" download>
          <Button
            className={classes.sendBtn}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Download CV
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default About;
