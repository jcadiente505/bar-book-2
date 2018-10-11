import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
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
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>{this.props.recipes}</TabContainer>
          <TabContainer dir={theme.direction}>{this.props.articles}</TabContainer>
          <TabContainer dir={theme.direction}>{this.props.topics}</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);