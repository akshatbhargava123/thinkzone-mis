import React from 'react';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const Header = withStyles(styles)(
  class Header extends React.Component {

    render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" style={{paddingRight: 18}}>
                Thinkzone MIS
              </Typography>
              <Tabs value={this.props.value} onChange={this.props.onTabChange} centered>
                <Tab label="Home" />
                <Tab label="Teachers" />
                <Tab label="Students" />
              </Tabs>
            </Toolbar>
          </AppBar>
        </div>
      );
    }

  });

export default Header;