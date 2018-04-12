import React, { Component } from 'react';

import { withStyles } from 'material-ui';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
})

const PersonInfo = withStyles(styles)(
  class PersonInfo extends Component {

    render() {
      const { info, infoHeader } = this.props;

      console.log('info', info);

      return (
        <Grid container style={{marginTop: 20}}>
          <Grid
            spacing={8}
            container
            alignItems="center"
            direction="row"
            justify="flex-start"
          >
            <Grid item>
              <Card raised={true} style={{ padding: 12 }}>
                <CardHeader title={infoHeader} />
                <CardContent style={{ display: 'flex' }}>
                  {
                    Object.keys(info).map((infoKey, i) => {
                      return (
                        <div key={i} style={{ padding: 6, paddingRight: 20 }}>
                          <Typography
                            variant={'display1'}
                          >
                            {infoKey.charAt(0).toUpperCase() + infoKey.slice(1)}
                          </Typography>
                          <Typography
                            variant={'headline'}
                            paragraph={true}
                            align="center"
                          >
                            {info[infoKey]}
                          </Typography>
                        </div>
                      )
                    })
                  }
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid >
      );
    }
  })

export default PersonInfo;