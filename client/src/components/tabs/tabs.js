import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Dialog, Button, Card, CardActionArea, CardContent, CardMedia, Divider, AppBar, Tabs, Tab, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import RecipeModal from "../recipemodal";


function TabContainer({ dir, children }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: "black",
    width: "100%",
  },
  appbar: {
      backgroundColor: "#00e676"
  },
  expansionRoot: {
    width: "100%",
  },
  expansionHeading: {
    width: "100%",
    textAlign: "center",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansionContent: {
    display: "block"
  },
  card: {
    // maxWidth: 345,
    minHeight: 100,
    marginTop: 20,
  },
  media: {
    height: 100,
    width: 100,
    float: "left"
  },
  recipe: {
    color: "white",
    border: "solid 1px white",
    marginBottom: 10,
    width: "100%",
    height: 50
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
});

const FullWidthTabs = props => {
    const { classes, theme } = props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Tabs
            value={props.value}
            onChange={props.handleChange}
            indicatorColor="primary"
            textColor="inherit"
            fullWidth
          >
            <Tab label="Recipe's" />
            <Tab label="Articles" />
            <Tab label="Friend's" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={props.value}
          onChangeIndex={props.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
          <Button onClick={props.handleClickOpen} className={classes.recipe}>Create Recipe</Button>
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
          {props.recipes.map((recipe, i) => {
            // console.log(recipe);
            return(
              <div key={i}>
                <ExpansionPanel className={classes.expansionRoot} key={recipe._id}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.expansionHeading}>{recipe.title}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{display: "block"}}>
                    <Typography className={classes.expansionContent} variant="subheading">Ingredients</Typography>
                    <Typography className={classes.expansionContent} variant="body1">{recipe.ingredients}</Typography>
                    <Divider/>
                    <Typography className={classes.expansionContent} variant="subheading">Build</Typography>
                    <Typography className={classes.expansionContent} title="Build" variant="body1">{recipe.build}</Typography>
                    <Divider/>
                    <Typography className={classes.expansionContent} variant="subheading">Summary</Typography>
                    <Typography className={classes.expansionContent} title="Summary" variant="body1">{recipe.summary}</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                </div>
            )})}
          </TabContainer>
          <TabContainer dir={theme.direction}>
          {props.articles.map(article => {
            // console.log(article)
            return(
                <Card key={article._id} className={classes.card}>
                  <CardActionArea
                  href={article.link}
                  component="a">
                    <CardMedia
                      className={classes.media}
                      image={article.image}
                      title={article.title}
                    />
                    <CardContent>
                      <Typography variant="subheading">
                      {article.title}
                      </Typography>
                      <Divider/>
                      <Typography variant="caption">
                       {article.summary}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            )
          })}
          </TabContainer>
          <TabContainer dir={theme.direction}>{props.topics}</TabContainer>
        </SwipeableViews>
      </div>
    );
  }

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);