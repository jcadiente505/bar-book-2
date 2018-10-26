import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {InputBase, List, ListItem, ListItemText, Typography, Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
      }
})

const TopicList = props => {
    const { classes } = props
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
                        <Typography variant="body1">
                            {recipes.ingredients}
                        </Typography>
                        <Divider />
                        <Typography variant="body2">
                            {recipes.summary}
                        </Typography>
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