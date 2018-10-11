import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemText, Typography} from '@material-ui/core';

const styles = {
    list: {
        width: '100%',
        backgroundColor: "grey",
        marginTop: 25
    },
    text: {
        color: "white",
        textAlign: "left"
    }
}

const TopicList = props => {
    const { classes } = props
    return (
      <div>
        <List className={classes.list}>
            <ListItem button>
                <ListItemText>
                    <Typography className={classes.text} variant="title">
                        Q: Hello World
                    </Typography>
                    <Typography variant="caption">
                        This is where the date and author go
                    </Typography>
                    <Typography variant="subheading">
                        This is where the summary will go:
                        Lorem Ipsum Solar Dit Amit
                    </Typography>
                </ListItemText>
            </ListItem>
        </List>
      </div>
    )
  }


TopicList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);