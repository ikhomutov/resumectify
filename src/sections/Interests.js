import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './Interests.styles';
import withSection from '../components/Section';


function Interests({ data }) {
  const classes = useStyles();

  return (
    <Grid container>
      {data.map((interest, index) => (
        <Grid item key={index} className={ classes.item }>
          { interest }
        </Grid>
      ))}
    </Grid>
  )
}

export default withSection(Interests, { title: 'Interests' })
