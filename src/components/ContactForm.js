import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button, Container, makeStyles } from "@material-ui/core";
import CssTextField from "./CssTextField";
import { Alert } from "@material-ui/lab";

const styles = makeStyles((theme) => ({
  root: {
    paddingTop: "60px",
    paddingBottom: "60px",
    backgroundColor: "#1F2833  ",
  },
  contactForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    textAlign: "center",
    paddingTop: "10px",
  },
  header: {
    display: "initial",
    color: "#fff",
    textAlign: "center",
  },
  sendBtn: {
    color: "#fff",
    width: "100px",
    border: "solid #08FDD8",

    "&:hover": {
      background: "#08FDD8",
    },
    fontWeight: "bold",
  },

  cssLabel: {
    color: "#fff",
    fontColor: "#fff",
    fontSize: "1.1rem",
    margin: "8px",
    fontWeight: "bold",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.secondary.main} !important`,
    },
  },

  cssFocused: {},
  notchedOutline: {},
}));

function ContactForm({ setShowToastr }) {
  const [checkInputs, setCheckInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState(false);
  const { name, email, subject, message } = checkInputs;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCheckInputs((prev) => ({ ...prev, [name]: value }));
  };
  const [sendDisabled, setSendDisabled] = useState(true);

  useEffect(() => {
    const isInputs = Object.values({
      name,
      email,
      subject,
      message,
    }).every((item) => Boolean(item));
    isInputs ? setSendDisabled(false) : setSendDisabled(true);
  }, [name, email, subject, message]);

  const classes = styles();
  const sendEmail = (e) => {
    e.preventDefault();
    !sendDisabled
      ? emailjs
          .sendForm(
            "service_nkdfba9",
            "template_v565o0k",
            e.target,
            "user_STt9EYYoBQn1qvgLmWtGW"
          )
          .then(
            (result) => {
              setShowToastr(true);
              setCheckInputs({
                name: "",
                email: "",
                subject: "",
                message: "",
              });
              console.log("Success");
            },
            (error) => {
              console.log(error.text);
            }
          )
      : setErrors(true);
  };

  return (
    <Container maxWidth={false} className={classes.root} id="contact">
      <div className={classes.header}>
        <h1>GET IN TOUCH!</h1>
        <p>Fill Up form</p>
      </div>
      <div className={classes.contactForm}>
        <form onSubmit={sendEmail} noValidate autoComplete="off">
          <div>
            <CssTextField
              id="standard-full-width"
              label="Name"
              name="name"
              value={name}
              error={!!checkInputs.name === ""}
              helperText={!!checkInputs.name === "" ? "Empty field!" : " "}
              onChange={handleChange}
              required={checkInputs.name ? false : true}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
                shrink: true,
              }}
              InputProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </div>
          <div>
            <CssTextField
              type="email"
              id="standard-basic"
              name="email"
              label="Email"
              value={email}
              required={checkInputs.email ? false : true}
              onChange={handleChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
                shrink: true,
              }}
              InputProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </div>
          <div>
            <CssTextField
              id="standard-basic"
              name="subject"
              label="Subject"
              value={subject}
              required={checkInputs.subject ? false : true}
              onChange={handleChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
                shrink: true,
              }}
              InputProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </div>
          <div>
            <CssTextField
              id="standard-basic"
              name="message"
              label="Message"
              value={message}
              required={checkInputs.message ? false : true}
              onChange={handleChange}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
                shrink: true,
              }}
              InputProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
            />
          </div>

          {errors && (
            <Alert variant="filled" severity="error">
              Invalid Inputs
            </Alert>
          )}
          <div className={classes.btnStyle}>
            <Button
              className={classes.sendBtn}
              variant="outlined"
              color="primary"
              type="submit"
            >
              SEND
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default ContactForm;
