import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "main" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#08FDD8",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#C5C6C7",
  },
  listTools: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  toolsContent: {
    display: "inline",
    border: "1px solid #45A29E",
    padding: "5px",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      background: "rgb(0,0,1,0.5)",
    },
  },
}));

function CustomizedProgressBars({ tools, progressName, progressValue }) {
  const classes = useStyles();
  const listTools = tools.map((tool, key) => (
    <span key={key} className={classes.toolsContent} style={{ margin: "5px" }}>
      {tool}
    </span>
  ));
  return (
    <>
      <Container className={classes.root}>
        <h2>{progressName}</h2>

        <BorderLinearProgress variant="determinate" value={progressValue} />
        <div className={classes.listTools}>{listTools}</div>
      </Container>
    </>
  );
}
export default CustomizedProgressBars;
