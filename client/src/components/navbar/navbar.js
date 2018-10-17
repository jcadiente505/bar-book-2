import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Drawer, Dialog } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignInModal from '../signInModal';
import LogInModal from '../logInModal';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
      fontSize: 30
    },
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar: {
    backgroundColor: "#00e676",
    width: "100%",
  },
  fullList: {
    width: 'auto',
  },
});

const Navbar = props => {
    const { classes } = props;
    const isLoggedIn = props.isLoggedIn
    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar} position="sticky">
          <Toolbar>
            <IconButton onClick={props.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="display2" color="inherit" className={classes.grow}>
              Bar Book
            </Typography>
              {!isLoggedIn ? (
                <div>
                  <Button onClick={props.toggleLogIn(true)} className={classes.loginButton} color="inherit">Login</Button>
                  <Button onClick={props.toggleSignUp(true)} className={classes.loginButton} color="inherit">Sign Up</Button>       
                </div>
              ) : (
                <Button onClick={props.handleLogOut} className={classes.loginButton} color="inherit">Log Out</Button>
              )}
            <Dialog
              open={props.signUp} onClose={props.toggleSignUp(false)}
            >
              <SignInModal
                handleClose={props.toggleSignUp}
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}
                firstName={props.firstName}
                lastName={props.lastName}
                email={props.email}
                username={props.username}
                password={props.password}
              />
            </Dialog>
            <Dialog
              open={props.logIn} onClose={props.toggleLogIn(false)}
            >
              <LogInModal
                handleClose={props.toggleLogIn(false)}
                handleInputChange={props.handleInputChange}
                handlelogIn={props.handlelogIn}
                username={props.username}
                password={props.password}
              />
            </Dialog>
          </Toolbar>
          <Drawer open={props.sideNav} onClose={props.toggleDrawer(false)}>
            {props.sideNavMenu}
          </Drawer>
        </AppBar>
      </div>
    )
  };

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);