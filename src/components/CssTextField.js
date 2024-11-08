import { TextField, withStyles } from "@material-ui/core";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#66FCF1 ",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#66FCF1",
    },
  },
})(TextField);

export default CssTextField;
