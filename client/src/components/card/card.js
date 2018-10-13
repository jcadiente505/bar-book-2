import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Card, CardContent, Typography, Button, Dialog} from "@material-ui/core";
import RecipeModal from "../recipemodal";

const styles = {
    card: {
        width: "100%",
        backgroundColor: "#00e676",
    },
    title: {
        textAlign: "center",
        color: "white"
    },
    icon: {
        fontSize: 100,
        color: "white"
    },
    center: {
        textAlign: "center"
    },
    recipe: {
        color: "white",
        border: "solid 1px white"
    }
}

const UserCard = props => {
    const { classes } = props
    return (
        <div>
            <Card className={classes.card}>
                <CardContent className={classes.center}>
                    <AccountCircle className={classes.icon}/>
                    <Typography className={classes.title} variant="display1">
                        {props.username}
                    </Typography>
                    <Button onClick={props.handleClickOpen} className={classes.recipe}>New Recipe</Button>
                    <Dialog
                        fullScreen
                        open={props.open}
                        onClose={props.handleClose}
                        TransitionComponent={props.Transition}
                    >
                    <RecipeModal
                        handleClose={props.handleClose}
                        handleInputChange={props.handleInputChange}
                        handleRecipeSubmit={props.handleRecipeSubmit}
                        title={props.title}
                        ingredients={props.ingredients}
                        summary={props.summary}
                    />
                    </Dialog>
                </CardContent>
            </Card>
        </div>
    )
}

UserCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserCard);
