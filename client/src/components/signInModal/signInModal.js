import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    title: {
        textAlign: "center"
    },
    icon: {
        textAlign: "center",
    }
});

const SignInModal = props => {
    const { classes } = props;
    return(
        <div>
            <DialogTitle className={classes.title} id="form-dialog-title">Sign Up!</DialogTitle>
            <DialogContent >
                <DialogContentText className={classes.icon} >
                    <AccountCircle style={{ fontSize: 50, color: "black" }} />
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="userName-input"
                    name="username"
                    label="Username"
                    value={props.username}
                    onChange={props.handleInputChange}
                    required
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password-input"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    value={props.password}
                    onChange={props.handleInputChange}
                    required
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose(false)} color="primary">
                    Cancel
                </Button>
                <Button to="/user" component={Link} onClick={props.handleFormSubmit} color="primary">
                    Sign Up
                </Button>
            </DialogActions>
        </div>
        );
    }


SignInModal.propTypes = {
    classes: PropTypes.object.isRequired,
};
      
export default withStyles(styles)(SignInModal);