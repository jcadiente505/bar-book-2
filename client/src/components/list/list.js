import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, Button, InputBase, List, ListItem, ListItemText, Typography, Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    list: {
        width: '100%',
        backgroundColor: "black",
    },
    text: {
        color: "black",
        textAlign: "left"
    },
    listItem: {
        backgroundColor: "white",
        marginBottom: 30,
        marginTop: 30,
    },
    searchIcon: {
        color: "white",
        width: theme.spacing.unit * 9,
        height: 50,
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: "white",
        border: "solid 1px white",
        marginBottom: 10,
        width: "100%",
        height: 50
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
      detailBtn: {
        backgroundColor: "black",
        color: "#00e675"
      }
})

const TopicList = props => {
    const { classes } = props
    const { selectedElement } = props
    return (
      <div>
          <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Recipe's..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={props.handleSearchChange}
            />
        <List className={classes.list}>
        {props.recipes.map((recipes, i) => {
            return(
                <ListItem className={classes.listItem} key={i}>
                    <ListItemText>
                        <Typography className={classes.text} variant="title">
                            {recipes.title}
                        </Typography>
                        <Typography variant="caption">
                            authored by {recipes.author}
                        </Typography>
                        <Divider />
                        <Typography variant="body2">
                            {recipes.summary}
                        </Typography>
                        <Button className={classes.detailBtn} variant="outlined" onClick={() => { props.onClickElement(recipes)} }>Details</Button>
                        {selectedElement && (
                        <Dialog
                            element={selectedElement}
                            open={props.open}
                            TransitionComponent={props.Transition}
                            onClose={props.handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                        <div>
                        <DialogTitle id="alert-dialog-slide-title">
                            {selectedElement.title}
                        </DialogTitle>
                        <DialogContent>
                            <Typography variant="headline">
                                Ingredients
                            </Typography>
                            <Divider/>
                            <DialogContentText id="alert-dialog-slide-description">
                                {selectedElement.ingredients}
                            </DialogContentText>
                            <Typography variant="headline">
                                Build
                            </Typography>
                            <Divider/>
                            <DialogContentText id="alert-dialog-slide-description">
                                {selectedElement.build}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                         <Button onClick={props.handleClose} color="primary">
                            Close
                         </Button>
                        </DialogActions>
                        </div>
                        </Dialog>
                            )}
                    </ListItemText>
                </ListItem>
            )})}
        </List>
      </div>
    )
  }


TopicList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);