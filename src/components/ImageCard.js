import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "@material-ui/core";
import { motion } from "framer-motion";
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 350,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    position: "relative",
    color: "#fff",
    textAlign: "center",
    cursor: "pointer",
  },
  media: {
    height: 200,
    position: "relative",

    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: "0%",
    width: "100%",
    backgroundColor: "#A9A9A9",
    textAlign: "center",
  },
  viewPopup: {
    fontSize: "2",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)translateY(-50%)",
  },
}));

const cardVariant = {
  show: {
    opacity: 1,
    transition: { type: "tween", duration: 2, ease: "easeOut" },
  },
  hidden: {
    opacity: 0.5,
    transition: {
      type: "tween",
      duration: 2,
      ease: "easeOut",
    },
  },
};

export default function ImgMediaCard({ project }) {
  const classes = useStyles();
  const [view, setView] = useState(false);

  return (
    <>
      <Link href={project.link}>
        <motion.div
          variants={cardVariant}
          onMouseEnter={() => setView(true)}
          onMouseLeave={() => setView(false)}
          whileHover="hidden"
        >
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              component="img"
              alt={project.title}
              image={project.imageUrl}
              title={project.title}
            />

            {view && (
              <>
                <div className={classes.title}>
                  <h2>{project.title}</h2>
                </div>
                <div className={classes.viewPopup}>
                  <h2>View</h2>
                </div>
              </>
            )}
          </Card>
        </motion.div>
      </Link>
    </>
  );
}
