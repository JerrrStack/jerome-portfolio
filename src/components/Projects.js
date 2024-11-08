import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import projects from "../static/projects";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "40vw",
    paddingTop: "60px",
    paddingBottom: "60px",
    textAlign: "center",
    width: "100%",
    backgroundColor: "#1F2833",
    "&, h1": {
      color: "#66FCF1 ",
    },
  },
  title: { color: "#fff", fontWeight: "300" },
  ImageCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.root} id="projects">
      <div>
        <h1 className={classes.title}>PROJECTS</h1>
        <span>(More coming soon.)</span>
      </div>
      <div className={classes.ImageCard}>
        <ImageCard project={projects[0]} />
        <ImageCard project={projects[1]} />
      </div>
    </Container>
  );
}

export default Projects;
