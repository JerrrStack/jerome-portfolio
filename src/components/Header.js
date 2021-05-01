import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Collapse,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import useWindowPosition from "../hook/useWindowPosition";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Roboto ",
    backgroundImage: `url(${"/assets/layout.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  appBar: {
    background: "none",
    width: "100%",
    paddingTop: "5px",
    [theme.breakpoints.down("md")]: {
      background: "rgb(0,0,1,0.5)",
    },
  },
  appBarFaded: {
    background: "none",
    width: "100%",
    backgroundColor: "rgb(0,0,1,0.5)",
  },
  appbarTitle: {
    marginRight: "auto",
    fontSize: "16px",
    textDecoration: "none",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  logo: {
    height: "50px",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: "30px",
    },
  },

  welcomeMsg: {
    fontSize: "3.2vw",
    lineHeight: "3rem",
    "& span": {
      fontSize: "1.5rem",
    },
  },
  scrollDown: {
    color: "#fff",
    textAlign: "center",
    "&:hover": {
      background: "#C5C6C7",
      opacity: "1",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
}));

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const loadingCircleVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

const loadingCircleTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeIn",
};

function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const scroll = useWindowPosition("header");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      {scroll ? (
        <AppBar className={classes.appBarFaded} elevation={0}>
          <Toolbar className={classes.wrapper}>
            <Scroll to="header" smooth={true} className={classes.appbarTitle}>
              <img
                src="/assets/appBarLogo.png"
                style={{ cursor: "pointer" }}
                alt="logo"
                className={classes.logo}
              />
            </Scroll>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Scroll to="about" smooth={true}>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Scroll>
              <Scroll to="skills" smooth={true}>
                <MenuItem onClick={handleClose}>Skills</MenuItem>
              </Scroll>
              <Scroll to="projects" smooth={true}>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
              </Scroll>
              <Scroll to="contact" smooth={true}>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Scroll>
            </Menu>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar className={classes.wrapper}>
            <Scroll to="header" smooth={true} className={classes.appbarTitle}>
              <img
                src="/assets/appBarLogo.png"
                style={{ cursor: "pointer" }}
                className={classes.logo}
                alt="logo"
              />
            </Scroll>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Scroll to="about" smooth={true}>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Scroll>
              <Scroll to="skills" smooth={true}>
                <MenuItem onClick={handleClose}>Skills</MenuItem>
              </Scroll>
              <Scroll to="projects" smooth={true}>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
              </Scroll>
              <Scroll to="contact" smooth={true}>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Scroll>
            </Menu>
          </Toolbar>
        </AppBar>
      )}

      <Container>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <div className={classes.welcomeMsg}>
            <h1 style={{ color: "#66FCF1 " }}>Hello</h1>
            <h1 style={{ color: "#C5C6C7" }}>I am</h1>
            <h1 style={{ color: "#C5C6C7" }}>Jerome</h1>
          </div>
          <motion.div
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
          >
            <motion.div
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.div>
            <motion.div
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            >
              <Scroll to="about" smooth={true}>
                <IconButton className={classes.scrollDown}>
                  <ExpandMoreIcon style={{ fontSize: "150%" }} />
                </IconButton>
              </Scroll>
            </motion.div>
            <motion.div
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            >
              <Scroll to="about" smooth={true}>
                <IconButton className={classes.scrollDown}>
                  <ExpandMoreIcon style={{ fontSize: "150%" }} />
                </IconButton>
              </Scroll>
            </motion.div>
            <motion.div
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            >
              <Scroll to="about" smooth={true}>
                <IconButton className={classes.scrollDown}>
                  <ExpandMoreIcon style={{ fontSize: "150%" }} />
                </IconButton>
              </Scroll>
            </motion.div>
          </motion.div>
        </Collapse>
      </Container>
    </div>
  );
}

export default Header;
