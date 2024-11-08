import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import LinearProgress from "./LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    display: "flex",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    "&, h1,h3": {
      color: "#66FCF1 ",
    },
  },
  title: {
    paddingTop: "60px",
    paddingBottom: "60px",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    backgroundColor: "#0B0C10   ",
    width: "100%",
    color: "#C5C6C7",
  },
  skills: {
    paddingTop: "60px",
    paddingBottom: "60px",
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#0B0C10   ",
  },
  leftSide: {
    width: "80%",
    textJustify: "center",
    "&, span": {
      fontSize: "16px",
    },
  },
}));
function Skills() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root} id="skills">
      <div className={classes.title}>
        <div className={classes.leftSide}>
          <h1>SKILLS & EXPERIENCE</h1>
          <br />
          <p>
            Since i started Web Development i keep on learning new things that
            will help me bringing ideas to life.
          </p>
          <p>
            <br />I have learned React js and Node js from online courses that
            i've been taken
          </p>{" "}
          <br />
          <h3>Certificates from Udemy:</h3>
          <p>Modern React With Redux</p>
          <p>Microservices with Node Js and React</p>
          <p>
            MERN Stack: React, Socket io, Nextjs, Express, MongoDB and NodeJs
          </p>
        </div>
      </div>
      <div className={classes.skills}>
        <LinearProgress
          progressValue={60}
          tools={["HTML5", "CSS3", "JavaScript(ES6)", "React"]}
          progressName={"FrontEnd"}
        />
        <LinearProgress
          progressValue={70}
          tools={[
            "NodeJS",
            "JavaScript(ES6)",
            "MongoDB",
            "MySQL",
            "Docker",
            "Kubernetes",
          ]}
          progressName={"BackEnd"}
        />
        <LinearProgress
          progressValue={50}
          tools={["Photoshop", "Illustrator"]}
          progressName={"Design Tools"}
        />
      </div>
    </Container>
  );
}

export default Skills;
