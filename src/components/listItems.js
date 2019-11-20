import React, {useState} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from 'react-router-dom'
import {
  //logOut,
  authenticateUser } from "../actions/index"
import {connect} from 'react-redux'

const Auth = new authenticateUser()

function MainListItems(props) {

  const handleLogout = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    props.logOut()
  }

  return(

    <div>
    <Divider />
    <List>

    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary={`Hello, ${props.username}`}/>
    </ListItem>

    <Link to='/plant/add'>
    <ListItem button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add a plant" />
    </ListItem>
    </Link>
    
    <ListItem button>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Edit Plant" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Delete Plant" />
    </ListItem>
    <ListItem button onClick = {handleLogout}>
      <ListItemIcon>
        <MeetingRoomIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
    </List>

  <Divider />
  </div>

);
}
function mapStateToProps(state) {
  return {
    username: state.userData,
  };
}

const mapDispatchToProps = {
  //logOut
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainListItems);
