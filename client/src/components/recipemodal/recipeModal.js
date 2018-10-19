import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  { InputLabel, FormControl, NativeSelect, Input, FormHelperText, Typography, IconButton, Toolbar, AppBar, ListItemText, ListItem, List, Divider, TextField } from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
const styles = {
    appBar: {
      position: 'relative',
      backgroundColor: "#00e676"
    },
    flex: {
      flex: 1,
      textAlign: "center"
    },
  };


const recipeModal = props => {
    const { classes } = props;
    return (
        <div>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton onClick={props.handleClose} aria-label="Close">
                <CloseIcon style={{ color: "white" }}/>
                </IconButton>
                <Typography variant="display1" color="inherit" className={classes.flex}>
                Add Recipe
                </Typography>
                <Button color="inherit" onClick={props.handleRecipeSubmit}>
                save
                </Button>
            </Toolbar>
            </AppBar>
                <List>
                <ListItem>
                    <ListItemText primary="Title"/>
                    <TextField
                        name="title"
                        value={props.title}
                        onChange={props.handleInputChange}
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Ingredients"/>
                    <TextField
                        name="ingredients"
                        value={props.ingredients}
                        onChange={props.handleInputChange} 
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Summary"/>
                    <TextField
                        name="summary"
                        value={props.summary}
                        onChange={props.handleInputChange} 
                    />
                </ListItem>
                <ListItem>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="public-helper">Public:  </InputLabel>
                        <NativeSelect
                            value={props.public}
                            onChange={props.handleInputChange}
                            input={<Input name="public" id="public-helper" />}
                        >
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                        </NativeSelect>
                        <FormHelperText>Share this recipe for others?</FormHelperText>
                    </FormControl>
                 </ListItem>
            </List>
        </div>
    );
    }

recipeModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(recipeModal)