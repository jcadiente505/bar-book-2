import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider, AppBar, Tabs, Tab, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'

function TabContainer({ dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    </Typography>
  );
}

TabContainer.propTypes = {
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: "white",
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
        {props.recipes.length ? (
          <TabContainer dir={theme.direction}>
          {props.recipes.map(recipe => (
            <ExpansionPanel key={recipe._id}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.expansionHeading}>{recipe.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="headline">{recipe.ingredients}</Typography>
                <Divider/>
                <Typography variant="headline">{recipe.summary}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
          ) : (
            <Typography variant="headline">"No results to display"</Typography>
          )};
          </TabContainer>
          <TabContainer dir={theme.direction}>{props.articles}</TabContainer>
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