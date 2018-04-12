import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  // card: {
  //   maxWidth: '25%',
  //   paddingRight: 50
  // },
};

const HomeCards = withStyles(styles)(
  class HomeCards extends Component {
    render() {
      const { classes } = this.props;

      const GridItem = (props) =>
        <Grid item>
          <Card raised={true}>
            <CardContent>
              <Typography variant="headline">
                {props.info.header}
              </Typography>
              <h1>{props.info.value}</h1>
              <Button size="small" onClick={() => {
                console.log(props);
                this.props.history.push('/home' + props.info.route)
              }}>Know More</Button>
            </CardContent>
          </Card>
        </Grid>;

      return (
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              spacing={40}
              container
              alignItems="center"
              direction="row"
              justify="flex-start"
            >
              <GridItem info={{ header: 'Total Centers:', value: '12', route: '/centers' }} />
              <GridItem info={{ header: 'Total Students:', value: '96', route: '/students/' }} />
              <GridItem info={{ header: 'Total EC Students:', value: '46', route: '/students/ECD' }} />
              <GridItem info={{ header: 'Total PG Students:', value: '50', route: '/students/PGE' }} />
            </Grid>
          </Grid>

          <Typography
            variant="display1"
            style={{ paddingTop: 30, paddingBottom: 20 }}
          >
            Learning Levels Improvements
        </Typography>
          <Grid item xs={12}>
            <Grid
              spacing={40}
              container
              alignItems="center"
              direction="row"
              justify="flex-start"
            >
              <GridItem info={{ header: 'PG Students:', value: '88%', route: '/learning-improvements/PGE' }} />
              <GridItem info={{ header: 'ECD Students:', value: '91%', route: '/learning-improvements/ECD' }} />
              <GridItem info={{ header: 'Total:', value: '89.5%', route: '/learning-improvements' }} />
            </Grid>
          </Grid>
        </Grid>
      );
    }
  })

export default HomeCards;