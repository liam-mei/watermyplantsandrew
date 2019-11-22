import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { authenticateUser } from "../actions/auth";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonIcon from "@material-ui/icons/Person";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Fab from "@material-ui/core/Fab";
import MuiPhoneNumber from 'material-ui-phone-number'

import {updatePhone} from '../actions/index'

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
  card: {
    maxWidth: 345,
    height: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const StyledCard = withStyles({
  root: {
    background: "rgba(0, 151, 168, 0.5)",
    boxShadow: "2px 2px 2px black;"
  }
})(Card);

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

const StyledFab2 = withStyles({
  root: {
    background: "#078B75",
    border: 0,
    color: "white",
    height: 30,
    width: 55,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
})(Button);
const StyledFab3 = withStyles({
  root: {
    background: "#078B75",
    border: 0,
    color: "white",
    height: 30,
    width: 85,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
})(Button);

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

const Profile = props => {

  const [phone, setPhone] = useState({
    phone: "",
  });



  const handlePhoneChange = value => {
    setPhone({ ...phone, phone:value })
    console.log('phone change', phone);
  }

  const submitHandler = event => {
    event.preventDefault();
    props.updatePhone(phone)
    alert('you changed your number')
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box p={2} position="absolute" top={100} left="10.5%" zIndex="tooltip">
        <StyledCard className={classes.card}>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={`change your number`} />

          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={`123-456-789`} />
          </ListItem>
          <form className={classes.form} onSubmit={submitHandler} noValidate>
          <MuiPhoneNumber
              defaultCountry={'us'}
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="phone"
              label="Phone"
              type="phone"
              value={props.phone}
              id="phone"
              autoComplete="phone-password"
              onChange={handlePhoneChange}
            />
          <Box p={4} top='30%' left="2.5%" zIndex="tooltip">
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="white"
              className={classes.submit}
            >
              Change Phone Number
            </StyledButton>
            <Link to="/dashboard">
              <Box
                text="Back to Dashboard"
                color="white"
                p={2}
                position="absolute"
                top='75%'
                left="10%"
                zIndex="tooltip"
              >
                <StyledFab>
                  <ArrowBackIcon />
                </StyledFab>
              </Box>
            </Link>
          </Box>
          </form>
        </StyledCard>

      </Box>
      <Box mt={100}>
        <Copyright />
      </Box>
    </Container>
  );
};


function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

const mapDispatchToProps = {
  updatePhone
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
