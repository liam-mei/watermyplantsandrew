import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { authenticateUser } from '../actions/auth'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Water My Plants
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  button: {
    color: "#0097A7",
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const StyledButton = withStyles({
  root: {
    background: "#078B75",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
})(Button);

const StyledFab = withStyles({
  root: {
    background: "#078B75",
    borderRadius: 30,
    border: 0,
    color: "white",
    height: 60,
    width: 56,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
})(Button);



const Login = props => {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handlerChange = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const submitHandler = event => {
    event.preventDefault();
    props.authenticateUser(user)
    console.log(user)
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Link to="/dashboard">
        <Box
          text="Back to Dashboard"
          color="white"
          p={2}
          position="absolute"
          top={15}
          left="10%"
          zIndex="tooltip"
        >
          <StyledFab>
            <ArrowBackIcon />
          </StyledFab>
        </Box>
      </Link>

      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Edit
        </Typography>
        <form className={classes.form} onSubmit={submitHandler} noValidate>
          <TextField
            variant="standard"
            margin="normal"
            required="true"
            fullWidth
            name="Plant Name"
            value={props.plantName}
            label="Plant Name"
            type="text"
            id="plantName"
            onChange={handlerChange}
          />
          <TextField
            variant="standard"
            margin="normal"
            required="true"
            fullWidth
            name="h20 Frequency"
            label="h20Frequency"
            type="text"
            value={props.h20Frequency}
            id="h20Frequency"
            onChange={handlerChange}
          />
          <Box
            text="Back to Dashboard"
            color="white"
            p={2}
            position="absolute"
            top={250}
            left="43%"
            zIndex="tooltip"
          >
            <StyledButton
              type="submit"
              variant="contained"
              color="inherited"
              className={classes.submit}
            >
              Save
          </StyledButton>
          </Box>
          <Box
            color="white"
            p={2}
            position="absolute"
            top={350}
            left="40.5%"
            zIndex="tooltip"
          >
            <Button className={classes.button}>X Delete Plant</Button>
          </Box>
        </form>
      </div>
      <Box mt={20}>
        <Copyright />
      </Box>
    </Container>
  );
}


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  authenticateUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);