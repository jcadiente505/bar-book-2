import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, CardActionArea, CardContent, CardMedia, Divider, AppBar, Tabs, Tab, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'

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
    width: "100%"
  },
  expansionHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  expansionContent: {
    marginLeft: 5,
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
            <Tab label="Events" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={props.value}
          onChangeIndex={props.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
          {props.recipes.map(recipe => {
            // console.log(recipe);
            return(
                <ExpansionPanel key={recipe._id}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.expansionHeading}>{recipe.title}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.expansionContent} variant="body1">{recipe.ingredients}</Typography>
                    <Divider/>
                    <Typography className={classes.expansionContent} title="Summary" variant="body1">{recipe.summary}</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
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