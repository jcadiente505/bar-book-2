import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const styles = theme => ({
    title: {
        textAlign: "center"
    },
    icon: {
        textAlign: "center",
    }
});

const LogInModal = props => {
    const { classes } = props
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
                    id="userName"
                    name="username"
                    value={props.username}
                    onChange={props.handleInputChange}
                    type="username"
                    label="Username"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password-input"
                    name="password"
                    value={props.password}
                    onChange={props.handleInputChange}
                    label="Password"
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handleClose(false)} color="primary">
                    Cancel
                </Button>
                <Button to="/user" component={Link} onClick={props.handlelogIn} color="primary">
                    Log In
                </Button>
            </DialogActions>
        </div>
    );
}


LogInModal.propTypes = {
    classes: PropTypes.object.isRequired,
};
      
export default withStyles(styles)(LogInModal);