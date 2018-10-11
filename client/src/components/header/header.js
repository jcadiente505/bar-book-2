import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import Background from '../../images/cocktail.jpg'

const styles = theme => ({
    jumbotron: {
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "70%",
        color: "white",
        height: 275,
        overFlow: "visible",
        [theme.breakpoints.up('lg')]: {
            backgroundPositionY: "70%"
          },
    },
    title: {
        fontFamily: "Lobster, cursive",
        color: "white",
        textAlign: "center",
        paddingTop: 10
    },
    card: {
        width: 175,
        height: 100,
    }
})

const Header = props => {
    const { classes } = props;
    return (
        <div>
            <Paper className={classes.jumbotron}>
                <Typography variant="display4" className={classes.title}>
                    Bar Book!
                </Typography>
            </Paper>
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);




