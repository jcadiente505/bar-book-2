import React from 'react'
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider, Paper, Grid } from '@material-ui/core';
import RecipePhoto from "../../images/recipe-photo.jpeg"
import CocktailPhoto from "../../images/cocktail-photo.jpg";
import ForumPhoto from "../../images/forum-photo.jpeg";

const styles = theme => ({
    header: {
        color: "white",
        textAlign: "center",
        marginTop: 25,
        lineHeight: 1,
        padding: 6,
    },
    divider: {
        backgroundColor: "white",
        marginRight: 30,
        marginLeft: 30
    },
    recipe: {
        backgroundImage: `url(${RecipePhoto})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: 222,
        textAlign: "center",
        color: "white"
    },
    cardContent: {
        paddingTop: 80,
        paddingLeft: 10,
        paddingRight: 10,
        lineHeight: 1.5,
        [theme.breakpoints.up('xs')]: {
            paddingRight: 30
        },
    },
    cocktail: {
        backgroundImage: `url(${CocktailPhoto})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: 222,
        textAlign: "center",
        color: "white"
    },
    forum: {
        backgroundImage: `url(${ForumPhoto})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: 222,
        textAlign: "center",
        color: "white"
    },
    gridItem: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 80
          },
    }
});

const About = props => {
    const { classes } = props;
    return (
        <div>
            <Grid container spacing={40}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Animated animationIn="fadeIn">
                        <Typography variant="display2" className={classes.header}>
                            About Us
                        </Typography>
                        <Divider className={classes.divider} />
                        <Typography variant="title" className={classes.header}>
                            An online recipe book for cocktail enthusiasts.
                        </Typography>
                    </Animated>
                </Grid>
                <Grid item xs={12} sm={12} lg={3} className={classes.gridItem}>
                    <Animated animationIn="fadeInLeftBig">
                        <Paper className={classes.recipe}>
                            <Typography variant="display1" className={classes.cardContent} color="inherit">
                                Keep all your recipe's in one place
                            </Typography>
                        </Paper>
                    </Animated>
                </Grid>
                <Grid item xs={12} sm={12} lg={3} className={classes.gridItem}>
                    <Animated animationIn="fadeInLeftBig">
                        <Paper className={classes.cocktail}>
                            <Typography variant="display1" className={classes.cardContent} color="inherit">
                                Save blog posts to keep up with current trends
                            </Typography>
                        </Paper>
                    </Animated>
                </Grid>
                <Grid item xs={12} sm={12} lg={3} className={classes.gridItem}>
                    <Animated animationIn="fadeInLeftBig">
                        <Paper className={classes.forum}>
                            <Typography variant="display1" className={classes.cardContent} color="inherit">
                                A community of peers helping one another
                            </Typography>
                        </Paper>
                    </Animated>
                </Grid>
            </Grid>
        </div>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);