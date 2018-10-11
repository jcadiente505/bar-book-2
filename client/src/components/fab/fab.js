import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

function FAB(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.fab} variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
}

FAB.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAB);