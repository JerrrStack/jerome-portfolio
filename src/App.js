import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { MsgSentToastr } from "./components/Toastr";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    fontFamily: "Roboto",
  },
});

function App() {
  const [showToastr, setShowToastr] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {showToastr && <MsgSentToastr />}
      <Header />
      <About />
      <Skills />
      <Projects />
      <ContactForm setShowToastr={setShowToastr} />

      <Footer />
    </div>
  );
}

export default App;
